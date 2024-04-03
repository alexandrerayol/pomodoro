import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 120px;
  height: 40px;

  background-color: ${(props) => props.theme["green-500"]};
  color: ${props => props.theme["white"]};
`;
