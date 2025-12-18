import { useState } from "react";

const TodoNew = (props) => {

  //const valueInput ="eric";
  const [valueInput, setValueInput] = useState("eric")

  const { addNewTodo } = props;

  // addNewTodo();
  const handleClick = () => {
    //console.log("check value input :", valueInput)
    //alert("click me")
    addNewTodo(valueInput)
    setValueInput("")
  }

  const handleOnChange = (name) => {
    setValueInput(name)
    //addNewTodo(name)
  }
  return (
    <div className='todo-new'>
      <input type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput}
      />
      <button
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >Add</button>
      <div>
        my text input is = {valueInput}
      </div>
    </div>
  )
}

export default TodoNew;