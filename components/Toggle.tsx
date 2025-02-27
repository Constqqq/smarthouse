import type React from "react"

interface ToggleProps {
  isOn: boolean
  onToggle: () => void
  activeColor: string
  inactiveColor: string
  icon: React.ReactNode
}

export function Toggle({ isOn, onToggle, activeColor, inactiveColor, icon }: ToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        w-12 h-12 rounded-full flex items-center justify-center transition-colors
        ${isOn ? activeColor : inactiveColor}
      `}
    >
      {icon}
    </button>
  )
}

