import React from 'react'
import Button from './Button'

function Slogan() {
    return (
        <div className='flex flex-col items-center'>
            <p className='text-2xl pb-2'>
                Buchen Sie noch heute einen kostenlosen Sehtest!
            </p>
            <p className='text-2xl pb-5'>
                Brille kaputt? Wir können auch da helfen.
            </p>
            <Button text='Termin buchen' dest='termine' />
        </div>
    )
}

export default Slogan