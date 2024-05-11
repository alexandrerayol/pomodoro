import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { CyclesReducer, CyclesType } from "../reducers/cycles/reduce";
import {
  createNewCycleAction,
  interruptCycleAction,
  marksCurrentCycleAsFinishedAction,
} from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

interface CycleContext {
  activeCycle: CyclesType | undefined;
  amountSecondsPassed: number;
  cycles: CyclesType[];
  marksCurrentCycleAsFinished: () => void;
  calcAmountSecondsPassed: () => void;
  createNewCycle: (data: DataType) => void;
  interruptCycle: () => void;
}

interface DataType {
  task: string;
  minutesAmount: number;
}

export const CycleContext = createContext({} as CycleContext);

export function CycleContextProvider({ children }: { children: ReactNode }) {
  const [cycleState, dispatch] = useReducer(
    CyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const cycleStateFromLocalStorage = localStorage.getItem(
        "@pomodoro:cycle-state"
      );

      if (cycleStateFromLocalStorage) {
        const cycleStateFromLocalStorageObject = JSON.parse(
          cycleStateFromLocalStorage
        );
        return cycleStateFromLocalStorageObject;
      }

      return initialState;
    }
  );

  useEffect(() => {
    localStorage.setItem("@pomodoro:cycle-state", JSON.stringify(cycleState));
  }, [cycleState]);

  const { activeCycleId, cycles } = cycleState;

  const activeCycle: CyclesType = cycles.find(
    (cycle) => cycle.id === activeCycleId
  );

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }
    return 0;
  });

  function createNewCycle(data: DataType) {
    const id = String(new Date().getTime());
    const newCycle: CyclesType = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setAmountSecondsPassed(0);
    dispatch(createNewCycleAction(newCycle));
  }

  function interruptCycle() {
    setAmountSecondsPassed(0);
    dispatch(interruptCycleAction());
  }

  function marksCurrentCycleAsFinished() {
    dispatch(marksCurrentCycleAsFinishedAction());
  }

  function calcAmountSecondsPassed() {
    if (activeCycle) {
      setAmountSecondsPassed(
        differenceInSeconds(new Date(), activeCycle.startDate)
      );
    }
  }

  return (
    <CycleContext.Provider
      value={{
        activeCycle,
        amountSecondsPassed,
        marksCurrentCycleAsFinished,
        calcAmountSecondsPassed,
        createNewCycle,
        interruptCycle,
        cycles,
      }}
    >
      {children}
    </CycleContext.Provider>
  );
}
