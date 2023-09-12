import React from 'react'

function Dategrid() {

    let numbers: number[] = new Array(31);

    for (let index = 0; index < numbers.length; index++) {
        numbers[index] = index + 1;
    }

    console.log(numbers)

    let elements: JSX.Element[] = numbers.map((number) =>
        <li tabIndex={0} className='border-2 border-blue-300 m-1.5 w-8 h-8 text-center text-lg
                                    cursor-pointer hover:border-blue-600 focus:bg-blue-500 focus:text-white'>
            {number}
        </li>
    );
    return (
        <div className='flex flex-col justify-start'>
            <div className='flex flex-col justify-start mb-4'>
                <p className='text-3xl text-center mb-2'>Sehtest buchen</p>
                <p className='text-lg text-center'>Datum wählen</p>
            </div>
            <ul className='flex flex-wrap flex-row max-w-xs'>
                {elements}
            </ul>
        </div>
    )
}

export default Dategrid