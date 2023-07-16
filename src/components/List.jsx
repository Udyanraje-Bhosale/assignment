import React from 'react'

const List = (props) => {
  return (
    <li className=" list list-item" style={{color:'whitesmoke', fontSize:'25px'}}>
    {props.item}
        <span className='icons mx-2'>
        <i className="fa fa-trash-o " aria-hidden="true" onClick={(e)=>{
            props.deleteItem(props.index);
        }}></i>
        </span>
    </li>
  )
}

export default List