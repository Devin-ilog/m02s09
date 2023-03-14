import "./Footer.css";

import { useContext } from "react";
import UserInfoContext from "../../UserInfoContext";

function Footer() {
  const [userInfo] = useContext(UserInfoContext);

  return (
    <footer className="FooterContainer">
      <p>SiH | 2023 | {userInfo.name}</p>
    </footer>
  );
}

export default Footer;
