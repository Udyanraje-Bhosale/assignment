import React, { useState } from 'react'
import Input from './Input'
import List from './List';


const Todo = () => {

const[todos, setTodos]= useState([]); 

const add= (inputText)=>{
  setTodos([...todos, inputText])
}

const deleteItem= (key)=>{
  let newList= [...todos];
  newList.splice(key,1);
  setTodos([...newList])
}
  
  return (
   <>
   <div className="outer d-flex flex-column  justify-content-center align-items-center" style={{height:'100vh', width:'100vw'}}>

   <Input add={add}/>
   <hr/>
  {
    todos.map((listItem, i)=>{
      return(
        <List key={i} index={i} item={listItem} deleteItem={deleteItem}/>
      )
    })

    
  }
    <h3>Total Number of Tasks: {todos.length}</h3>
   </div>
   </>
  )
}

export default Todo