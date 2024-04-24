import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 4rem;
  }

  nav {
    display: flex;
    gap: 1rem;
    a {
      color: ${(props) => props.theme["gray-300"]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: border 0.1s ease-in-out;
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme["green-500"]};
      }
      &.active {
        color: ${(props) => props.theme["green-500"]};
      }
    }
  }
`;
