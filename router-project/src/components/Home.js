import React, { useContext } from 'react';
import {GlobalContext} from '../App';

export default function Home() {

    const value = useContext(GlobalContext);

  return (
    <>
        <div>Home</div>
        {value}
    </>
  )
}
