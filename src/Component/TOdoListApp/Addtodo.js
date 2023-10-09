import React, { useState } from 'react'

function Addtodo() {
    const[task,setTask]=useState(
        {
            name:'',
            task:'',
            owner:'',
        }
      
    )
    const handeler=(event)=>{
        setTask({...task,[event.target.name]:[event.target.value]})
        
    }
    const print=()=>{
        console.log(task);
    }
    return (
        <div>
            <form onSubmit={print}>
                <input name='name' value={ha}/>
                <input name='name' value={task.task}/>
                <input name='name' value={task.owner}/>
            
            </form>
            <button onClick={handeler}>Add</button>
        </div>
    )
}

export default Addtodo
