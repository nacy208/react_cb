import { useState } from "react";

const TodoNew = (props) => {

    console.log('props from TodoNew:', props);
    //const { addNewTodo } = props;

    const [valueInput, setValueInput] = useState('olivia');
    // addNewTodo();


    const handleClick = () => {
        props.addNewTodo(valueInput);
        setValueInput('');
    }
    // const handleChange = (e) => {
    //     console.log('input changed:', e.target.value);
    // }

    //  cach 2
    const handleChange = (name) => {
        setValueInput(name);
    }

    return (<div className="todo-new">

        <input type="text" placeholder="check list todo" onChange={(event) => handleChange(event.target.value)} />
        <button style={{ cursor: "pointer" }} onClick={handleClick} >add</button>
        <div>Value Input: {valueInput}</div>
    </div>)
}

export default TodoNew;

// cach 2:<input type="text" placeholder="check list todo" onChange={handleChange} />