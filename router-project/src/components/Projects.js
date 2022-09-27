import React, {useContext} from 'react';
import {GlobalContext} from '../App';

export default function Projects() {
    const {globalData} = useContext(GlobalContext);

  return (
    <>
        <div>Projects</div>
        <p>{globalData}</p>
    </>
  )
}
