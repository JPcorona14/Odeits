import React, { useState } from "react";

import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";

function App() {
  const [loginVerified, setLoginVerified] = useState(false)

  function updateLogin(e) {
    setLoginVerified(e)
  }

  if (loginVerified) {
    return (
      <MainPage loginVerified={updateLogin}/>
    );
  } else {
    return <LoginPage loginVerified={updateLogin}/>;
  }
}

export default App;
