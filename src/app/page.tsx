'use client'
import { useCallback } from "react";
import TaskCounter from "@/components/TaskCounter";
import TaskInput from "@/components/TaskInput";
import TaskItem from "@/components/TaskItems";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Task } from "@/Types/task";

export default function Home() {
  const [tasks,setTasks]=useLocalStorage<Task[]>('tasks',[]);

  const addTask=useCallback((text:string)=>{
    const newTask:Task={id:crypto.randomUUID(),text,completed:false};
    setTasks((prev:Task[])=>[newTask,...prev])
  },[setTasks])

  const toggleTask=useCallback((id:string)=>{
    setTasks((prev:Task[])=>prev.map(t=>t.id===id?{...t,completed:!t.completed}:{...t,completed:false}))
  },[setTasks])

  const deleteTask=useCallback((id:string)=>{
    setTasks((prev:Task[])=>prev.filter(t=>t.id!==id))
  },[setTasks])

  const completedCount=tasks.filter((t:Task)=>t.completed).length
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <TaskInput onAdd={addTask}/>
      <TaskCounter total={tasks.length} completed={completedCount}/>
      <div className="mt-4 flex flex-col gap-2">
        {tasks.map((task:Task)=>(
          <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask}/>
        ))}
      </div>
    </div>
  );
}
