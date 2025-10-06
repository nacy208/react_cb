
//component = html + js+css
import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';


const App = () => {
  //{key:value}
  const learn = 'olivia';
  const age = 21;
  const data = { name: 'olivia', age: 21, address: 'hn' }
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
      </div>

      <TodoNew />
      <TodoData
        name={learn}
        age={age}
        data={data}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' alt="todo" />
      </div>
    </>
  )
}

export default App
