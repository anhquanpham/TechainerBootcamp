import Task from './Task';

function Tasks({ tasks, onAdd, onDelete, onUpdate }) {
    return (
        <div>
            {tasks.map((el) => <Task task = {el } onAddTask = {onAdd} onDelete = {onDelete} onUpdate = {onUpdate}/> )}
        </div>
    )
}

export default Tasks