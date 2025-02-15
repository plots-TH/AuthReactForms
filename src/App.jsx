import React, { useState } from "react";

import Authenticate from "../components/authenticate/authenticate";
import SignUpForm from "../components/signUpForm/signUpForm";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}

export default App;
