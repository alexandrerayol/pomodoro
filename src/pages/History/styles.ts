import styled from "styled-components";

export const HistoryContainer = styled.main`
  width: 100%;
  max-height: 720px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3.5rem;
`;

export const HistoryTittle = styled.h1`
  color: ${(props) => props.theme["gray-300"]};
  font-size: 1.5rem;
`;

export const HistoryTableContainer = styled.div`
  overflow: auto;
  table {
    width: 100%;
    min-width: 720px;
    border-collapse: collapse;
    text-align: left;
  }

  thead {
    background-color: ${(props) => props.theme["gray-600"]};
  }

  th {
    padding: 1rem 1.5rem;
    font-size: 0.875rem;
    font-weight: bold;
    color: ${(props) => props.theme["gray-300"]};

    &:first-child {
      max-width: 50%;
      border-top-left-radius: 8px;
    }
    &:last-child {
      border-top-right-radius: 8px;
    }
  }

  td {
    padding: 1rem 1.5rem;
    background-color: ${(props) => props.theme["gray-700"]};
    color: ${(props) => props.theme["gray-300"]};
    font-size: 0.875rem;
    font-weight: normal;

    &:last-child {
      display: flex;
      align-items: center;
    }
  }
  tr {
    border-bottom: 4px solid ${(props) => props.theme["gray-800"]};
  }
`;

interface StatusProps {
  statusColor: "green-500" | "yellow-500" | "red-500";
}

export const Status = styled.span<StatusProps>`
  display: flex;
  &::before {
    margin-right: 0.75rem;
    overflow: hidden;
    content: ".";
    color: transparent;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color: ${(props) => props.theme[props.statusColor]};
  }
`;
