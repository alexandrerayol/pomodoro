import { useContext } from "react";
import { FormContainer } from "./styles";
import { CycleContext } from "../../../../contexts/CycleContext";
import { useFormContext } from "react-hook-form";

export function FormComponent() {
  const { register } = useFormContext();
  const { activeCycle } = useContext(CycleContext);

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <input
        type="text"
        placeholder="Dê um nome para o seu projeto"
        list="taskList"
        required
        {...register("task", { maxLength: 25 })}
        disabled={activeCycle ? true : false}
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
        step={0.5}
        min={0}
        max={60}
        defaultValue={5}
        {...register("minutesAmount", {
          valueAsNumber: true,
          min: 0,
          max: 60,
        })}
        disabled={activeCycle ? true : false}
      />
      <span>minutos</span>
    </FormContainer>
  );
}
