import React, {useContext} from 'react';
import {GlobalContext} from '../App';
import Button from '@mui/material/Button';

export default function About() {
    const {globalData} = useContext(GlobalContext);

  return (
    <>
        <div>About</div>
        <p>{globalData}</p>
        <Button variant="contained" >Click me!</Button>
    </>
  )
};
