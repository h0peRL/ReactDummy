import React from 'react';
import logo from '../images/logo.svg';
import Willkommen from './components/Willkommen';
import Slogan from './components/Slogan';

function Landingpage(): JSX.Element {
  return (
    <div className="flex flex-col justify-evenly items-center">
      <Willkommen />
      <Slogan />
    </div>
  );
}

export default Landingpage;
