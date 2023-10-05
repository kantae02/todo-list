import './addTodo.css'
import React from 'react'
import {useState} from 'react'




const TodoForm = ({addTodo}) =>{
      const [value,setValue] = useState("")

    const onFormSubmit =( event )=> {
        event.preventDefault();

        setValue('')
        addTodo(value)
        console.log(value)
      
    } 
    const onInputChange =(event)=>{
        setValue(event.target.value)
    }
    return(
        <form onSubmit={onFormSubmit} className='addTodo'>
                <input
                value={value}
                required
                onChange={onInputChange}
                 type='text' 
                 placeholder="Add tasks here..."
                 />
              
                <button className="button_add" type="submit">ADD ITEM</button>
        </form>
    )
}
export default TodoForm