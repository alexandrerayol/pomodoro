import { PlayCircle } from "@phosphor-icons/react";
import { FormContainer, FormCountDown, FormHeader, HomeContainer } from "./styles";
export function Home() {
  return (
    <HomeContainer>
      <FormContainer>
        <FormHeader>
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="taskList"
          />
          <datalist id="taskList">
            <option value="Projeto 1" />
            <option value="Projeto 12323" />
            <option value="Projeto 12424" />
          </datalist>

          <label htmlFor="amountMinutes">durante</label>
          <input type="number" id="amountMinutes" placeholder="00" step={5} min={5} max={60} maxLength={2}/>
          <span>minutos</span>
        </FormHeader>
        <FormCountDown>
          <span>0</span>
          <span>0</span>
          <div>:</div>
          <span>0</span>
          <span>0</span>
        </FormCountDown>
        <button type="submit" disabled>
          <PlayCircle size={32} weight="duotone" />
          Começar
        </button>
      </FormContainer>
    </HomeContainer>
  );
}
