import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { JsxElement } from "typescript";
import Button from "./Button";
import Inputfield from "./Inputfield";
import Logo from "../../images/logo.svg";

function Loginfenster(): JSX.Element {
  return (
    <div className="flex flex-col justify-evenly h-96">
      <img src={Logo} alt="logo" className="h-20 w-20 self-center" />
      <h1 className="text-3xl text-center">Anmelden</h1>
      <Inputfield text="Benutzername" type="text" />
      <Inputfield text="Passwort" type="password" />
      <div className="flex flex-col justify-between items-center h-28">
        <Button text="Anmelden" dest="../termine" />
        <p className="flex flex-col justify-evenly items-center">oder</p>
        <Button text="Registrieren" dest="registrieren" />
      </div>
    </div>
  );
}

export default Loginfenster;
