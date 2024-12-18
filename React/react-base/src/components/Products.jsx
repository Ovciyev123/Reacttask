import React, { useState } from "react";

import products from "./product";



function Products() {
  let [myproducts, setmyproducts] = useState(products)
  let[newproductname , setnewproductname] = useState("")
  let[newproductprice , setnewproductprice] = useState("")
  function handleDelete(id){
    let filtered=myproducts.filter(product => product.id!=id);
    setmyproducts(filtered);
  }
  function handleSubmit(e){  
    e.preventDefault();
    let newproduct=
    {
      id:myproducts.length + 1 ,
      name:newproductname,
      price:newproductprice
    }

    setmyproducts([...myproducts, newproduct]);


  }

  function handleClearAll(){


    setmyproducts([]);



  }

  function Sort(){
    let sorted=myproducts.sort((a,b)=>a.price-b.price);
    setmyproducts([...sorted]);
  }



  return (
    <div>
      <br />
      <form onSubmit={(e)=>handleSubmit(e)} >
       <input type="text" placeholder="Name" value={newproductname} onChange={(e)=>(setnewproductname(e.target.value))} />
       <br /><br />
       <input type="number" max={10000} min={0} value={newproductprice} onChange={(e)=>(setnewproductprice(e.target.value))} />
       <br /><br />
       <button>Add</button>
      </form>
      <br />
      <button onClick={()=>Sort()}>Sort</button>
      <br /><br />
      <ol>
        {
          myproducts.map(product => (<li key={product.id}>{product.name}--{product.price}$<button onClick={()=>handleDelete(product.id)}>Delete</button></li>))
        }
         
      </ol>
      <br />

      <button onClick={()=>handleClearAll()}>Clear All</button>

    </div>
  );
}

export default Products;
