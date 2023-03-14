import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PageWrapper } from "./components/PageWrapper";
import { HomePage } from "./pages/Home";
import { ContactPage } from "./pages/Contact";

import UserInfoContext from "./UserInfoContext";

function App() {
  const [userInfo, setUserInfo] = useState({ name: "Isaac" });

  return (
    <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
      <Header />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </PageWrapper>
      <Footer />
    </UserInfoContext.Provider>
  );
}

export default App;
