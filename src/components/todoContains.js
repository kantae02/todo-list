
import './todoContains.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'


const TodoContains =({task,handleDelete})=>{
     

    const [isClicked, setIsClicked] = useState(false);
    
  
    const handleClick = () => {
      setIsClicked(!isClicked); // Toggle the state on click
    }
      

 


    const textDecoration = isClicked ? 'line-through' : 'none';
    const textDecorationColor = isClicked? '#e65245' : ''
    const textDecorationThickness = isClicked? '0.2rem' : ''
    
    return(
        <div className="todoContains">
         <div className='task'>  <p style={{textDecoration,textDecorationColor,textDecorationThickness}}> {task.task}  </p></div>
           <div className='fonts'>
           <FontAwesomeIcon className='check' icon={faPenToSquare}  onClick={handleClick} />
           <FontAwesomeIcon className='trash' icon={faTrash}   onClick={()=>handleDelete(task)}/>
           </div>
        </div>

    )
}
export default TodoContains