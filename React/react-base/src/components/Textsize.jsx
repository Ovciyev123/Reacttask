import React, { useState } from 'react'

function Textsize() {

    let [fontsize, setfontsize]=useState(16)

    function Increase(){

    setfontsize( ++fontsize )
        


    }

    function Decrease(){

      

        setfontsize(--fontsize)

      
        
    }
  return (
   <>
   <p style={{fontSize:fontsize + "px"}}>Adjust my font size</p>
   <button onClick={Increase}>Increase</button>
   <button onClick={Decrease} disabled={fontsize<=10}>Decrease</button>
   </>
  )
}

export default Textsize