import React from "react";
import TextMitTitel from "./components/TextMitTitel";
import Dategrid from "./components/Dategrid";
import DropdownList from "./components/DropdownList";
import Button from "./components/Button";

function TerminBuchen(): JSX.Element {
    return (
        <div className='flex flex-row justify-evenly'>
            <Dategrid />
            <div className='flex flex-col justify-between max-h-80'>
                <DropdownList
                    title='Zeit wählen'
                    topValue='Verfügbare Zeiten'
                    options={["11:30", "11:45", "12:00", "15:45", "16:15"]}
                />
                <Button text='Termin Bestätigen' dest='../' color='hover:bg-green-500' />
            </div>
            <div className="flex flex-col justify-start w-96">
                <TextMitTitel
                    titel="Termin Buchen"
                    text="Sie haben auch die Möglichkeit Ihren Termin telefonisch zu buchen. Rufen Sie die untere Nummer an, um dies zu tun."
                />
                <p className=" text-center text-3xl mt-20">+41 76 123 12 34</p>
            </div>
        </div>
    )
}

export default TerminBuchen;
