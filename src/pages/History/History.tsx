import {
  HistoryContainer,
  HistoryTableContainer,
  HistoryTittle,
  Status,
} from "./styles";

export function History() {
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
            <tr>
              <td>Descrição completa da tarefa</td>
              <td>25 minutos</td>
              <td>Há 1 hora</td>
              <td>
                <Status statusColor="yellow-500"></Status>
                Em andamento
              </td>
            </tr>
            <tr>
              <td>Descrição completa da tarefa</td>
              <td>25 minutos</td>
              <td>Há 1 hora</td>
              <td>
                <Status statusColor="yellow-500"></Status>
                Em andamento
              </td>
            </tr>
            <tr>
              <td>Descrição completa da tarefa</td>
              <td>25 minutos</td>
              <td>Há 1 hora</td>
              <td>
                <Status statusColor="yellow-500"></Status>
                Em andamento
              </td>
            </tr>
            <tr>
              <td>Descrição completa da tarefa</td>
              <td>25 minutos</td>
              <td>Há 1 hora</td>
              <td>
                <Status statusColor="yellow-500"></Status>
                Em andamento
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryTableContainer>
    </HistoryContainer>
  );
}
