import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { Timer, Scroll } from "@phosphor-icons/react";
import icon from "../../assets/icon.svg";
export function Header() {
  return (
    <HeaderContainer>
      <NavLink to={"/"}>
        <img src={icon} alt="" />
      </NavLink>
      <nav>
        <NavLink to={"/"} title="Página inícial">
          <Timer size={32} weight="duotone" />
        </NavLink>
        <NavLink to={"/history"} title="Histórico">
          <Scroll size={32} weight="duotone" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
