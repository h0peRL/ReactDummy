import React from "react";
import Loginfenster from "./components/Loginfenster";

function Login(): JSX.Element {
  return (
    <div className="flex flex-col justify-evenly items-center h-full">
      <Loginfenster />
    </div>
  );
}

export default Login;
