import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { JsxElement } from "typescript";
import logo from "../../images/logo.svg";
import Navbutton from "./Navbutton";

function Navbar(): JSX.Element {
    return (
        <header className="p-5 flex flex-row items-center mb-6">
            <nav className="flex flex-row flex-auto justify-start w-1/2 items-center">
                <div className="mr-10">
                    <Link to="/">
                        <img src={logo} alt="Logo der Firma Fernsicht" className="hover:scale-125 transition-all duration-300" />
                    </Link>
                </div>
                <ul className="flex flex-row justify-start h-min">
                    <li>
                        <Navbutton text="Home" dest="/"></Navbutton>
                    </li>
                    <li>
                        <Navbutton text="Termine" dest="termine"></Navbutton>
                    </li>
                    <li>
                        <Navbutton text="Info/Kontakt" dest="info"></Navbutton>
                    </li>
                </ul>
            </nav>
            <ul className="flex flex-row w-auto">
                <li>
                    <Navbutton text="Kunden Login" dest="login"></Navbutton>
                </li>
                <li>
                    <Navbutton text="Mitarbeiter Login" dest="loginMitarbeiter"></Navbutton>
                </li>
            </ul>
        </header>
    );
}

export default Navbar;