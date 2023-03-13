import { useContext } from "react";
import UserContext from "../../UserContext";
import "./Header.css";

function Header() {
  const userInfo = useContext(UserContext);

  return (
    <header className="HeaderContainer">
      <h1>Módulo 2 Semana 9</h1>
      <p>{userInfo.name}</p>
    </header>
  );
}

export default Header;
