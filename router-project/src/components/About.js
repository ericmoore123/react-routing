import React, {useContext} from 'react';
import {GlobalContext} from '../App';

export default function About() {
    const {globalData} = useContext(GlobalContext);

  return (
    <>
        <div>About</div>
        <p>{globalData}</p>
    </>
  )
}
