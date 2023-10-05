import './todoWraper.css'
import TodoHeader from './todoHeader'
import AddTodo from './TodoForm'
import TodoContains from './todoContains'
import {useState} from 'react'

const TodoWraper = () =>{
    const [input,setInput] = useState('')
    const [todos, setTodos] = useState([])

    return(
        <div className="todoWraper">
            <TodoHeader/>
            <TodoContains/>
            <AddTodo
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            />

        </div>
    )
}

export default TodoWraper