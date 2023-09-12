import React from 'react';
import '../css/App.css';
import logo from '../images/logo.svg';

function PageNotFound() {
    return (
        <div className='flex flex-col justify-evenly items-center'>
            <h1 className='text-2xl mb-5 text-red-600 font-bold'>Error 404: Page not found!</h1>
            <p className='text-xl mb-6'>
                Diese Seite ist noch nicht vorhanden oder die eingegebene URL ist ungültig.
            </p>
            <img src={logo} alt="logo" className='scale-150' />
        </div>
    );
}

export default PageNotFound;