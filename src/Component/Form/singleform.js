import React, { useState } from 'react'

function SingleForm() {
    //here we declare user to get the value from the form 
    const [user,setUser]=useState("")
    const [country,setCountry]=useState("")
    return (
        <div>
            <h1>This is an Single Value Form </h1>
            <input type='text' onChange={(e)=>{setUser(e.target.value)}} placeholder='name'/>
            <h1>{user}</h1>
            <input type='text' onChange={(e)=>{setCountry(e.target.value)}} placeholder='country'/>
            <h1>{country}</h1>
        </div>
    )
}

export default SingleForm
