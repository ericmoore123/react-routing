import React from 'react'

export default function Overlay({ setGlobalData, setOverlayPopped }) {
  
  return (
    <>
      <form>
        <label>
          Enter your name: <input type="text" name="name" onChange={ (e) => setGlobalData(e.target.value) } />
        </label>
        <input type="submit" value="Submit" onClick={setOverlayPopped(true)} />
      </form>
    </>
  )
}
