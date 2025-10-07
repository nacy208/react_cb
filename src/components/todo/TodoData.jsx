/* eslint-disable no-unused-vars */

//props la object
const TodoData = (props/*{name} lay name ra ko nen*/) => {

    const { todoList, deleteTodo } = props;
    // eslint-disable-next-line no-unused-vars
    //const { name, age, data } = props;
    // console.log('props:', props);

    const handleDelete = (id) => {
        deleteTodo(id);
    }
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                // eslint-disable-next-line react/jsx-key
                return (<div key={item.id}>
                    <div className={`todo-item `} >
                        <div>{item.title}</div>
                        <button style={{ cursor: "pointer" }} onClick={() => handleDelete(item.id)} >Delete</button>
                    </div>
                </div>)
            })}
            {/* <div>
                {JSON.stringify(props.todoList)}
            </div> */}
        </div>
    )
}

export default TodoData;