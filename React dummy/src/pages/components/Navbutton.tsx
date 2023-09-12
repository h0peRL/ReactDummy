import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

interface Navbutton {
    text: string;
    dest: string;
}

function Navbutton(prop: Navbutton) {
    return (
        <div className="mr-10">
            <Link to={prop.dest}>
                <div className='border-b-2 border-blue-400 hover:bg-blue-200 hover:scale-110 transition-all duration-300
                            text-xl py-1 px-2 rounded-t-md'>
                    {prop.text}
                </div>
            </Link>
        </div>
    )
}

export default Navbutton