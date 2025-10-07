
const TodoNew = (props) => {
    console.log('props from TodoNew:', props);
    const { addNewTodo } = props;
    addNewTodo();

    const handleClick = () => {
        console.log('click add new todo');
    }
    const handleChange = (e) => {
        console.log('input changed:', e.target.value);
    }

    /* cach 2
    const handleChange = (name) => {
        console.log('input changed:', name);
    }
    */
    return (<div className="todo-new">
        <input type="text" placeholder="check list todo" onChange={handleChange} />
        <button style={{ cursor: "pointer" }} onClick={handleClick} >add</button>
    </div>)
}

export default TodoNew;

// cach 2: <input type="text" placeholder="check list todo" onChange={() => onChange(e.target.value)}/>