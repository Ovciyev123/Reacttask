import React from 'react'
import { useState } from 'react';
function counter() {
    let [count,setCount] = useState(0)

    function countDecrease(){

       if (count>=1) {

        setCount(--count)
        console.log(count);
        
       }
        
    }

    function countInrease(){

        setCount(++count)
        console.log(count);
    }

    function countReset(){
        setCount(0)
        console.log(count);
    }
  return (
    <>
     <button onClick={()=>countDecrease()}>-</button>
     <span>{count}</span>
     <button onClick={()=>countInrease()}>+</button>
     <button onClick={()=>countReset()}>reset</button>
     
    </>
   
  )
}

export default counter