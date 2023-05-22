import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

export default function Todo({task, toggleComplete, deleteTodo, editTodo}){
    const handleToggleComplete = () => {
        toggleComplete(task.id);
    };
    return (
        <div className="Todo">
            <div>
                <FontAwesomeIcon icon={task.completed ? faCheckSquare : faSquare} onClick={handleToggleComplete}/>
            </div>
            <p
                className={`${task.completed ? 'completed' : ''}`}
            >
                {task.task}
            </p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    )
}