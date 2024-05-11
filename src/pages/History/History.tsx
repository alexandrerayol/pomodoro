import { useContext, useEffect } from "react";
import {
  HistoryContainer,
  HistoryTableContainer,
  HistoryTittle,
  Status,
} from "./styles";
import { CycleContext } from "../../contexts/CycleContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function History() {
  const { cycles } = useContext(CycleContext);
  return (
    <HistoryContainer>
      <HistoryTittle>Meu histórico</HistoryTittle>
      <HistoryTableContainer>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles
              .map((cycle) => (
                <tr>
                  <td>{cycle.task}</td>
                  <td>{`${cycle.minutesAmount} minutos`}</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    <Status
                      statusColor={
                        cycle.finishDate
                          ? "green-500"
                          : cycle.interruptDate
                          ? "red-500"
                          : "yellow-500"
                      }
                    ></Status>
                    {cycle.finishDate
                      ? "Concluído"
                      : cycle.interruptDate
                      ? "Interrompido"
                      : "Em andamento"}
                  </td>
                </tr>
              ))
              .reverse()}
          </tbody>
        </table>
      </HistoryTableContainer>
    </HistoryContainer>
  );
}
