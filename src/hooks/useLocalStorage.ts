'use client'

import { useEffect, useState } from "react"

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue)

  useEffect(() => {
    const storage = localStorage.getItem(key)
    if (storage) {
      setValue(JSON.parse(storage))
    }
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}