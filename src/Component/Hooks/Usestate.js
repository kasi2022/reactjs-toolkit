import React, { useState } from 'react'

function UseState() {
    //count usestate
    // const num=["red","orange","purple","white","balck"];
    // const [count, setCount] = useState(0)
        // console.log(num[count])

    //form values UseState 
    const [name,setName]=useState("john ");
    const [gender,setGender]=useState("");
    return (
        <div>
            {/* <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Count</button> */}
            <label>Name</label>
            <input type='text' onChange={(e)=>setName(e.target.value)}/>
            <h1>{name}</h1>
            <input type='text' onChange={(e)=>setGender(e.target.value)}/>
            <h1>{gender}</h1>
            
        </div>
    )
}

export default UseState
