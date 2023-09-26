import React, { useState } from 'react'

function Multiform() {
    const[user,setUser]=useState({
        name:"",
        email:"",
        password:"",

    })
    const handeler=(event)=>{
    
            setUser({...user,[event.target.name]:[event.target.value]})
        
    }
    const handelsubmit =()=>{
        console.log(user)
    }

    return (
        <div>
             <h1>This is an Multi Form Value Form </h1>
            <input type='text' name="name" onChange={handeler} placeholder='name'/>
            <input type='text' name='email' onChange={handeler} placeholder='email'/>
            <input type='text' name='password' onChange={handeler} placeholder='password'/>
            <button onClick={handelsubmit}>Submit</button>

        </div>
    )
}

export default Multiform
