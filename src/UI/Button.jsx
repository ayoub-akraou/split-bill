import React from 'react'

export default function Button({children, className = ""}) {
  return (
    <button className={`block text-black bg-amber-500 rounded-md font-medium shadow-sm px-2 py-1 hover:bg-amber-400 transition-colors active:scale-95 ${className}`}>{children}</button>
  )
}
