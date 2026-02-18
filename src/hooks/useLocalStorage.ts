'use client'

import { useEffect, useState } from "react"





export const useLocalStorage=<T>(key:string,intialValue:T)=>{
    const [value,setValue]=useState(()=>{
        const storage=localStorage.getItem(key)
        return storage?JSON.parse(storage):intialValue;
    })


    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])

    return [value,setValue] as const;
}