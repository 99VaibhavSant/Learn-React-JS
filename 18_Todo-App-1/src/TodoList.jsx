import { useState } from "react"

export default function TodoList(){
    let [todos , setTodos] = useState(["Sample Task"])
    let [newTodo , setNewTodo] = useState("")

    let addNewTask=()=>{
        setTodos([...todos , newTodo])
        setNewTodo("")
    }

    let updateTodoValue =(event) => {
        setNewTodo(event.target.value)
    }
    return(
        <div>
            <input type="text"
              placeholder="Enter a Task"
              value={newTodo}
              onChange={updateTodoValue}
            />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br />
            <hr />
            <h4>Todo List</h4>
            <ul>
                {todos.map((item)=>
                    <li>{item}</li>
                )}
            </ul>
        </div>
    )
}
