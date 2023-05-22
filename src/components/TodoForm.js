import { useState } from "react"


export default function TodoForm ({addTodo}) {
    
    const [value, setValue] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" value={value} className="todo-input" placeholder="Write your task" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">add Task</button>
        </form>    
    )
}