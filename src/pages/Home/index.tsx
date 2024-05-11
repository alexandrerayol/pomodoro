import { PlayCircle, StopCircle } from "@phosphor-icons/react";
import { useForm, FormProvider } from "react-hook-form";
import {
  FormContainer,
  HomeContainer,
  StopCountdownButton,
  StartCountdownButton,
} from "./styles";
import { FormCountdown } from "./components/FormCountdown";
import { FormComponent } from "./components/Form";
import { useContext } from "react";
import { CycleContext } from "../../contexts/CycleContext";

interface DataType {
  task: string;
  minutesAmount: number;
}

export function Home() {
  const form = useForm<DataType>({
    defaultValues: {
      task: "",
      minutesAmount: 5,
    },
  });

  const { handleSubmit, reset } = form;

  const { createNewCycle, activeCycle, interruptCycle } =
    useContext(CycleContext);

  return (
    <HomeContainer>
      <FormContainer onSubmit={handleSubmit(createNewCycle)}>
        <FormProvider {...form}>
          <FormComponent />
        </FormProvider>
        <FormCountdown />
        {activeCycle ? (
          <StopCountdownButton
            type="button"
            onClick={() => {
              reset();
              interruptCycle();
            }}
          >
            <StopCircle size={32} weight="duotone" />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit">
            <PlayCircle size={32} weight="duotone" />
            Começar
          </StartCountdownButton>
        )}
      </FormContainer>
    </HomeContainer>
  );
}
