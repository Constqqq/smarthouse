"use client"

import { useState } from "react"
import { HomeKitButton } from "@/components/HomeKitButton"

function Toggle({ isOn, onToggle }: { isOn: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`
        w-12 h-12 rounded-full flex items-center justify-center transition-colors
        ${isOn ? "bg-blue-400 text-white" : "bg-gray-200 text-gray-400"}
      `}
    >
      💨
    </button>
  )
}

export default function VentilationPage() {
  const [fans, setFans] = useState([
    { id: "kitchen", name: "Кухня", isOn: false },
    { id: "bathroom", name: "Ванная", isOn: false },
  ])

  const toggleFan = (id: string) => {
    setFans(fans.map((fan) => (fan.id === id ? { ...fan, isOn: !fan.isOn } : fan)))
  }

  return (
    <div className="container mx-auto max-w-2xl space-y-8">
      <div className="flex items-center gap-4">
        <HomeKitButton label="Дом" href="/">
          <span className="text-2xl">🏠</span>
        </HomeKitButton>
        <HomeKitButton label="Вентиляция" href="/ventilation" isActive>
          <span className="text-2xl">💨</span>
        </HomeKitButton>
      </div>

      <div className="grid gap-4">
        {fans.map((fan) => (
          <div key={fan.id} className="p-4 bg-white/90 backdrop-blur-md rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{fan.name}</h3>
                <p className="text-sm text-gray-500">{fan.isOn ? "On" : "Off"}</p>
              </div>
              <Toggle isOn={fan.isOn} onToggle={() => toggleFan(fan.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

