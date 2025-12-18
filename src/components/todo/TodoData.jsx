const TodoData = (props) => {
    // console.log(">>> check props: ",props)
    // const {name} = props;

    const { todoList, deleteTodo } = props

    const handleClick = (nameId) => {
        deleteTodo(nameId)
    }


    // const { todoList } = props;
    //console.log(">>> check props: ", todoList)

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                //console.log(">> check map: ", item.name, index)
                return (
                    <div className={`todo-item`} key={item.id} >
                        <div >{item.name}</div>
                        <button
                            style={{ cursor: "pointer" }}
                            onClick={() => handleClick(item.id)}
                        >Delete</button>
                    </div>)

            })}
        </div>
    )
}

export default TodoData;