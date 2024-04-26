import { PlayCircle } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";

import {
  FormContainer,
  FormCountDown,
  FormHeader,
  HomeContainer,
} from "./styles";

export function Home() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      task: "",
      minutesAmount: 5,
    },
  });

  function handleCreateNewPomodoro(data: any) {
    console.log(data);
    reset();
  }

  return (
    <HomeContainer>
      <FormContainer onSubmit={handleSubmit(handleCreateNewPomodoro)}>
        <FormHeader>
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            type="text"
            placeholder="Dê um nome para o seu projeto"
            list="taskList"
            required
            {...register("task", { maxLength: 25 })}
          />
          <datalist id="taskList">
            <option value="Projeto 1" />
            <option value="Projeto 12323" />
            <option value="Projeto 12424" />
          </datalist>

          <label htmlFor="amountMinutes">durante</label>
          <input
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            defaultValue={5}
            {...register("minutesAmount", {
              valueAsNumber: true,
              min: 5,
              max: 60,
            })}
          />
          <span>minutos</span>
        </FormHeader>
        <FormCountDown>
          <span>0</span>
          <span>0</span>
          <div>:</div>
          <span>0</span>
          <span>0</span>
        </FormCountDown>
        <button type="submit">
          <PlayCircle size={32} weight="duotone" />
          Começar
        </button>
      </FormContainer>
    </HomeContainer>
  );
}
