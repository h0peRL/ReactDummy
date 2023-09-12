import React from 'react'

interface DropdownList {
    title?: string;
    topValue: string;
    options: string[];
}

function DropdownList(prop: DropdownList) {

    let optionsArray: JSX.Element[] = prop.options.map((option) =>
        <option value={option}>{option}</option>
    );

    return (
        <div className='flex flex-col justify-between h-24'>
            <label className='text-3xl'>{prop.title}</label>
            <select name={prop.topValue} id={prop.topValue} className="border-2 border-black rounded focus:bg-slate-100
                                                                        focus:border-blue-600">
                <option value={prop.topValue}>{prop.topValue}</option>
                {optionsArray}
            </select>
        </div>
    )
}

export default DropdownList