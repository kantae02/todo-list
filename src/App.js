
import './App.css';

import TodoHeader from './components/todoHeader'

import TodoContains from './components/todoContains'
import { useState } from 'react'

import TodoForm from './components/TodoForm';
// uuidv4();

function App() {
  const [todos, setTodos] = useState([])


  const addTodo = (todo) => {
    setTodos([...todos, { id: Math.random().toString(), task: todo, completed: false }])
    console.log(todos)
  }
  // const handleDelete =(index)=>{
  //   console.log('clicked')
  //   console.log('Index:', index);
  //   let reducedTodo = [...todos]
  //   reducedTodo.splice(index, 1)

  //   setTodos(reducedTodo)
  // }
    
  const handleDelete = (deleteTodos)=>{
    const newTodos= todos.filter((todos)=> todos !== deleteTodos)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div>
        <TodoHeader />
      </div >
      <div className='todos'>
        {todos.map((todo, index) => (
          <TodoContains task={todo} key={index} handleDelete={handleDelete} />
        ))}
      </div>
      <div>
        <TodoForm
          addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;

