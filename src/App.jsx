import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PageWrapper } from "./components/PageWrapper";
import { HomePage } from "./pages/Home";

import UserInfoContext from "./UserInfoContext";

function App() {
  const [userInfo, setUserInfo] = useState({ name: "Isaac" });

  return (
    <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
      <Header />
      <PageWrapper>
        <HomePage />
      </PageWrapper>
      <Footer />
    </UserInfoContext.Provider>
  );
}

export default App;
