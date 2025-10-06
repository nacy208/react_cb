
//props la object
const TodoData = (props/*{name} lay name ra ko nen*/) => {
    console.log('props:', props);

    const { name, age, data } = props;
    return (
        <div className="todo-data">
            <div>My name is : {name}</div>
            <div>Learn React</div>
            <div>Learn Nodejs</div>
        </div>
    )
}

export default TodoData;