
//component = html + js+css
import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';


const App = () => {
  //{key:value}
  const learn = 'olivia';
  const age = 21;
  const data = { name: 'olivia', age: 21, address: 'hn' }
  // eslint-disable-next-line no-unused-vars
  const [todoList, setTodoList] = useState([
    { id: '1', title: 'learn react' },
    { id: '2', title: 'learn nodejs' },
  ])
  const addNewTodo = () => {
    alert('add new todo')
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
      </div>

      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={learn}
        age={age}
        data={data}
        todoList={todoList}

      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' alt="todo" />
      </div>
    </>
  )
}

export default App
