import React, { useContext } from 'react';
import {GlobalContext} from '../App';

export default function About() {
  return (
    <>
        <div>About</div>
        <GlobalContext.Consumer >
        {(value) => <p>{value}</p>}

        </GlobalContext.Consumer>
    </>
  )
}
