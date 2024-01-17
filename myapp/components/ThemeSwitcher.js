// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="flex gap-4">
      <button onClick={(e) => setTheme('light')}>Light Mode</button>
      <button onClick={(e) => setTheme('dark')}>Dark Mode</button>
    </div>
  )
};