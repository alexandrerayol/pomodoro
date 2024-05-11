import styled from "styled-components";

export const HomeContainer = styled.main`
  margin: 0 auto;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  align-items: center;
  justify-content: center;
`;

export const BaseCountdownButton = styled.button`
  border: none;
  outline: none;
  width: 100%;
  height: 4rem;
  border-radius: 8px;
  color: ${(props) => props.theme["gray-300"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.75);
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme["red-500"]};
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme["green-500"]};
`;
