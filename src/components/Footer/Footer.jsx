import "./Footer.css";

import { useContext } from "react";
import UserInfoContext from "../../UserInfoContext";

function Footer() {
  const [userInfo, setUserInfo] = useContext(UserInfoContext);

  const mudaPraRomeu = () => setUserInfo({ name: "Romeu" });

  return (
    <footer className="FooterContainer">
      <p>SiH | 2023 | {userInfo.name}</p>
      <button onClick={mudaPraRomeu}>Muda pra Romeu</button>
    </footer>
  );
}

export default Footer;
