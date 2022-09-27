import React, { useContext } from 'react';
import {GlobalContext} from '../App';

export default function Projects() {
  
    return (
    <>
        <div>Projects</div>
        <GlobalContext.Consumer >
            {(value) => <p>{value}</p>}
        </GlobalContext.Consumer>
    </>
  )
}
