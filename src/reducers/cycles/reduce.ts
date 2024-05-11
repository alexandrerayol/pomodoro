export interface CyclesType {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptDate?: Date;
  finishDate?: Date;
}

interface CycleState {
  cycles: CyclesType[];
  activeCycleId: string | null;
}

export enum ActionTypes {
  create_new_cycle = "create_new_cycle",
  interrupt_cycle = "interrupt_cycle",
  marks_current_cycle_as_finished = "marks_current_cycle_as_finished",
}

export function CyclesReducer(state: CycleState, action: any) {
  if (action.type === ActionTypes.create_new_cycle) {
    return {
      ...state,
      cycles: [...state.cycles, action.payload.newCycle],
      activeCycleId: action.payload.newCycle.id,
      amountSecondsPassed: 0,
    };
  }

  if (action.type === ActionTypes.interrupt_cycle) {
    return {
      ...state,
      cycles: state.cycles.map((cycle) => {
        if (cycle.id === state.activeCycleId) {
          return { ...cycle, interruptDate: new Date() };
        } else {
          return cycle;
        }
      }),
      activeCycleId: null,
    };
  }

  if (action.type === ActionTypes.marks_current_cycle_as_finished) {
    return {
      ...state,
      cycles: state.cycles.map((cycle) => {
        if (cycle.id === state.activeCycleId) {
          return { ...cycle, finishDate: new Date() };
        } else {
          return cycle;
        }
      }),
      activeCycleId: null,
    };
  }

  return state;
}
