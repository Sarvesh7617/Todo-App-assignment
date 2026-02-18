

interface CounterProps{
    total:number
    completed:number
}




const TaskCounter=({total,completed}:CounterProps)=>{
    return(
        <div className="flex gap-4 mt-4">
            <span>Total:{total}</span>
            <span>Completed:{completed}</span>
            <span>Pending:{total-completed}</span>
        </div>
    )
}


export default TaskCounter;