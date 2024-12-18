import React, { useState } from 'react'



function Labeltext() {

 let [labeltext, setlabeltext]=useState("")

function handleText(e){

     setlabeltext(e)

}

function handleReset(){


     setlabeltext("")
   
 
}

  return (
    <>
   <input type="text" placeholder='text'value={labeltext} onChange={(e)=>handleText(e.target.value)} />
   <p>You typed:{labeltext}</p>
   <button onClick={()=>handleReset()}>Reset</button>
    </>
    
  )
}

export default Labeltext