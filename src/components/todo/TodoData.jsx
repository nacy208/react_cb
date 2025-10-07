
//props la object
const TodoData = (props/*{name} lay name ra ko nen*/) => {
    console.log('props:', props);

    // eslint-disable-next-line no-unused-vars
    const { name, age, data } = props;
    return (
        <div className="todo-data">
            <div>My name is : {name}</div>
            <div>Learn React</div>
            <div>Learn Nodejs</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;