import styled from "styled-components";

export const FormContainer = styled.header`
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

    &:disabled {
      cursor: not-allowed;
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
