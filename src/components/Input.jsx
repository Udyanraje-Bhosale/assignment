import React, { useState } from 'react'

const Input = (props) => {
    const [input,setInput]= useState(""); 
  return (

   
    <>

   
    <form >
     <h1 className='mx-5'  style={{fontFamily:'fantasy', color:'whitesmoke'}}>To-Do List</h1>
       <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder='Enter a Todo...' className='task-input'/>
       <button type='button'  className='btn btn-success mx-2 '  onClick={()=>{
        props.add(input);
        setInput("")
       }}>Add</button>
      
    </form>  
   
    
   
    </>
  )
}

export default Input