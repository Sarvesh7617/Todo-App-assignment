'use client'
import { useState,FormEvent } from "react";


interface taskinputProps{
    onAdd:(text:string)=>void
}

const TaskInput=({onAdd}:taskinputProps)=>{
    const [text,setText]=useState<string>("");

    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault()
        const trimmed=text.trim()
        if(!trimmed)
            return
        onAdd(trimmed)
        setText("");
    }
    return(
        <form onSubmit={handleSubmit} className="flex gap-3">
            <input
                type="text"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                className="flex-1 px-4 py-2 rounded border"
                title="tast input"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-violet-500 text-white rounded"
            >Add</button>
        </form>
    )
}


export default TaskInput;