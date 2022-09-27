import React, { useContext } from 'react';
import {GlobalContext} from '../App';

export default function Home() {

    const {globalData, setGlobalData} = useContext(GlobalContext);

  return (
    <>
        <div>Home</div>
        <p>{globalData}</p>

        <label htmlFor="globalContextChange">Change Context:</label>
        <input id="globalContextChange" type="text" onChange={(e) => setGlobalData(e.target.value)}/>
    </>
  )
}
