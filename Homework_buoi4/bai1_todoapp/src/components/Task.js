function Task( {task, onUpdate, onDelete}) {
    return (
        <div className ={ `task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onUpdate(task.id)}>
            <h3>{ task.text }

            < input type = 'submit' value = "Delete Task" style = {{color : "black", height: 30, alignment: "center"}} onClick = {() => onDelete(task.id)}/>
            </h3>
            <p>{ task.time }</p>
        </div>
    )
}

export default Task
