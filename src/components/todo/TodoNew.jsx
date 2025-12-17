import{ useState } from "react";
const TodoNew = (props) => {

  //const valueInput ="eric";
  const [valueInput, setValueInput] = useState("eric")

  const{addNewTodo}=props;

  // addNewTodo();
  const handleClick = () => {
    console.log("check value input :", valueInput)
    //alert("click me")
  }

  const handleOnChange = (name) => {
    setValueInput(name)
  }
    return(
        <div className='todo-new'>
        <input type="text" 
        onChange={(event) => handleOnChange(event.target.value)}
        />
        <button 
        style={{cursor: "pointer"}}
        onClick={handleClick}
        >Add</button>
        <div>
          my text input is = {valueInput}
        </div>
      </div>
    )
}

export default TodoNew;