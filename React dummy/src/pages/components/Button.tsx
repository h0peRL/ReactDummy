import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

interface Button {
    text: string;
    dest: string;
    color?: string;
}

function Button(prop: Button) {

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => { // must be HTMLDivElement as function is called on a div, not a button!!!
        e.preventDefault();
        alert("Der Termin wurde erfolgreich abgesagt.")
    }

    let defaultStyle: string = "bg-slate-300 hover:scale-105 transition-all duration-300 w-fit text-lg py-1 px-2 rounded-full"

    if (prop.color != undefined) {
        defaultStyle = defaultStyle + " " + prop.color;
    }
    else {
        defaultStyle = defaultStyle + " hover:bg-blue-500"
    }

    if (prop.dest != "absagen") {
        return (
            <div className="w-fit">
                <Link to={prop.dest}>
                    <div className={defaultStyle}>
                        {prop.text}
                    </div>
                </Link>
            </div>
        )
    }
    else {
        return (
            <div tabIndex={0} className="w-fit hover:cursor-pointer" onClick={handleClick}>
                <div className={defaultStyle}>
                    {prop.text}
                </div>
            </div>
        )
    }
}

export default Button