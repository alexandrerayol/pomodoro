import styled from "styled-components";

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
