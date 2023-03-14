import "./Header.css";

import { useContext } from "react";
import UserInfoContext from "../../UserInfoContext";

function Header() {
  const [userInfo] = useContext(UserInfoContext);

  return (
    <header className="HeaderContainer">
      <h1>Módulo 2 Semana 9</h1>
      <p>{userInfo.name}</p>
    </header>
  );
}

export default Header;
