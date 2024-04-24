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

  button {
    border: none;
    outline: none;
    width: 100%;
    height: 4rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme["green-500"]};
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
  }
`;

export const FormHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  font-size: 1.125rem;
  color: ${(props) => props.theme["gray-100"]};

  input {
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1.5px solid ${(props) => props.theme["gray-400"]};
    color: ${(props) => props.theme["gray-100"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }

    &:focus {
      border-bottom: 1.5px solid ${(props) => props.theme["green-500"]};
    }
  }

  input[type="text"] {
    flex: 1;
  }
  input[type="number"] {
    width: 3.5rem;
    text-indent: 6px;
  }
`;

export const FormCountDown = styled.div`
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  font-size: 10rem;
  line-height: 8rem;
  display: flex;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme["green-500"]};
    padding: 2rem 0;
    width: 4rem;
  }

  span {
    background-color: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;
