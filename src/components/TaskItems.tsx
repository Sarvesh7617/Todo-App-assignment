import { Task } from "@/Types/task";



interface TaskProps{
    task:Task
    onToggle:(id:string)=>void
    onDelete:(id:string)=>void
}



const TaskItem=({task,onToggle,onDelete}:TaskProps)=>{
    return(
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={()=>onToggle(task.id)}
                title="checkbox"
            />
            <span className={task.completed?"line-through text-gray-400":""}>
                {task.text}
            </span>
            <button 
                onClick={()=>onDelete(task.id)}
                className="text-red-400">
                Delete
            </button>
        </div>
    )
}


export default TaskItem;