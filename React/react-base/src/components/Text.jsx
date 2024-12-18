import React from 'react'
import { useState } from 'react';

function Text() {

    let [visible,setVisible] =useState(true);

function visibilty() {
     setVisible(!visible);
}




  return (

    <>

    <button onClick={visibilty}>{visible ? "hide" : "show"}</button>
    {visible && <p>This is text</p>}

    </>
  )
}

export default Text