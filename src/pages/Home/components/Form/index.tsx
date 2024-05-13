import { useContext } from "react";
import { FormContainer } from "./styles";
import { CycleContext } from "../../../../contexts/CycleContext";
import { useFormContext } from "react-hook-form";

export function FormComponent() {
  const { register } = useFormContext();
  const { activeCycle, cycles } = useContext(CycleContext);
  const firstFiveCycles = cycles.slice(0, 5);

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
        {firstFiveCycles
          ? firstFiveCycles
              .map((cycle) => <option>{cycle.task}</option>)
              .reverse()
          : ""}
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
