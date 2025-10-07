
//props la object
const TodoData = (props/*{name} lay name ra ko nen*/) => {

    const { todoList } = props;
    // eslint-disable-next-line no-unused-vars
    const { name, age, data } = props;
    console.log('props:', props);
    return (
        <div className="todo-data">
            {todoList.map((item) => {
                // eslint-disable-next-line react/jsx-key
                return (<div>
                    <div className="todo-item" >
                        <div>{item.title}</div>
                        <button style={{ cursor: "pointer" }}>Delete</button>
                    </div>
                </div>)
            })}
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;