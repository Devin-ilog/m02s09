import { useState } from "react";
import { HomePage } from "./pages/Home";

import UserInfoContext from "./UserInfoContext";

function App() {
  const [userInfo, setUserInfo] = useState({ name: "Isaac" });

  return (
    <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
      <HomePage />
    </UserInfoContext.Provider>
  );
}

export default App;
