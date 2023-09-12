import React from 'react'
import Button from './Button'

interface Terminliste {
    titel?: string;
    termine: string[];
}

function Terminliste(prop: Terminliste) {

    const terminListe: JSX.Element[] = prop.termine.map((termin) =>
        <li className='text-lg font-semibold border-t border-slate-400 py-2
                        flex flex-row-reverse items-center'>
            <div className='flex flex-row justify-between ml-12 w-56'>
                <Button text='Verschieben' dest='buchen' />
                <Button text='Absagen' dest='absagen' color='hover:bg-red-500' />
            </div>
            <div className='ml-12 h-fit'>20.02.2022</div>
            <div className='ml-12 h-fit'>12:00</div>
            <div className='mr-auto h-fit'>{termin}</div>
        </li>
    );

    if (prop.titel == null) {
        prop.titel = "Lorem Ipsum";
    }

    return (
        <div>
            <h1 className='text-3xl mb-3'>{prop.titel}</h1>
            <ul>{terminListe}</ul>
        </div>
    )
}

export default Terminliste