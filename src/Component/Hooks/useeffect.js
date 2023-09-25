import React, { useEffect, useState } from 'react'

function UseEffect() {
    // useState [ 1)=>import useStaet from react 2)=>usesate shoud delecter top of function component ]
    // 3)=> const refere varible declaraction
    //4)=> here we decare tow varible one cout and one is setCount
    //5)->count is holds initilize value and  set count hold the updated state value
    //6) cout value has hold two value using destructer method 
    

    const [count,setCount]=useState(0)
    //use effect use mostly for api integraction in react function component 
    //using :we need to import useeffect react 
    //Definaction:Useffect is and automated function it will run the block code and every
    // second example given below 
    useEffect(
        ()=>{
            setCount(count+1)
        }
    )
    return (
        <div>
            <h1>UseEffect Component</h1>
            <h1>{count}</h1>
            {/* here Regular method we fallow to update the cout values */}
            <button onClick={()=>setCount(count+1)}></button>
        </div>
    )
}

export default UseEffect
