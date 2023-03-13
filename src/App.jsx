import { useState } from "react";
import { HomePage } from "./pages/Home";
import UserContext from "./UserContext";

function App() {
  const [userInfo, setUserInfo] = useState({ name: "Romeu" });

  return (
    <UserContext.Provider value={userInfo}>
      <HomePage />
    </UserContext.Provider>
  );
}

export default App;
