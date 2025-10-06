
const TodoNew = (props) => {
    console.log('props from TodoNew:', props);
    const { addNewTodo } = props;
    addNewTodo();
    return (<div className="todo-new">
        <input type="text" placeholder="check list todo" />
        <button>add</button>
    </div>)
}

export default TodoNew;