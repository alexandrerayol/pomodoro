import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 64rem;
  height: 44rem;
  margin: 2.5rem auto;
  border-radius: 8px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["gray-800"]};
`;
