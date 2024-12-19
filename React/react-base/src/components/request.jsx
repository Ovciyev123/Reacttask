import React, { useState, useEffect } from 'react'
import axios from 'axios'

function request() {

    let [data, setData] = useState([])
    let [loading, setLoading] = useState(true)
    let [dataname, setDataname] = useState("")
    let [unitStock, setUnitStock] = useState(0)
    let[discontinued, setDiscontinuated]=useState(false)



    function getData() {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setData(res.data)
                setLoading(false)
            }
            )
    }

   async function deleteData(id) {
     await   axios.delete(`https://northwind.vercel.app/api/products/${id}`)
         let filtered=data.filter(elem=>elem.id!==id) 
          setData(filtered)
    }

function addData(e) {

    e.preventDefault()


    let newData={

        name:dataname,
        disContinued:discontinued,
        unitsinStock:unitStock

    }
   
    

    axios.post('https://northwind.vercel.app/api/products',newData)
       .then(res => {
            setData([...data, res.data])
        }
        )


}


    useEffect(() => {
        getData()
    }, [])



    return (

        <>

           <form onSubmit={(e)=>addData(e)}>
            <input type="text" value={dataname} onChange={(e)=>(setDataname(e.target.value))}/>
            <input type="text" value={discontinued} onChange={(e)=>(setDiscontinuated(e.target.value))}/>
             <input type="number" value={ unitStock} onChange={(e)=>(setUnitStock(e.target.value)
             )}/>  
            <button >Add</button>
            </form>  


            {loading == true ? (<div className="loader"></div>) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Discountinued</th>
                            <th>unitsInStock</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map(element => (<tr key={element.id}><td>{element.name}</td>
                                <td  style={{ backgroundColor: element.discontinued==true ? "red" : "yellow" }}>{element.discontinued}</td>
                                <td style={{ color: element.unitsinStock > 10 ? "green" : "red" }}>{element.unitsinStock}</td>
                                <button  onClick={()=>deleteData(element.id)}>delete</button>                          
                                </tr>
                            ))



                        }
                    </tbody>




                </table>

            )}





        </>


    )
}

export default request