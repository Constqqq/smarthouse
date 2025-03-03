"use client"

import { useState } from "react"
import { HomeKitButton } from "@/components/HomeKitButton"

function Toggle({ isOn, onToggle }: { isOn: boolean; onToggle: () => void }) {
  return (
    
    <button
      onClick={onToggle}
      className={`
        w-12 h-12 rounded-full flex items-center justify-center transition-colors
        ${isOn ? "bg-yellow-400 text-yellow-700" : "bg-gray-200 text-gray-400"}
      `}
    >
      💡
    </button>
  )
}

export default function LightingPage() {
  const [rooms, setRooms] = useState([
    { id: "living", name: "Гостинная", isOn: false },
    { id: "kitchen", name: "Кухня", isOn: false },
    { id: "bedroom", name: "Спальня", isOn: false },
  ])

  const toggleLight = (id: string) => {
    setRooms(rooms.map((room) => (room.id === id ? { ...room, isOn: !room.isOn } : room)))
  }

  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      {/* Контейнер с кнопками */}
      <div className="flex gap-6 h-16 items-center">
        <HomeKitButton label="Дом" href="/">
          <span className="text-2xl">🏠</span>
        </HomeKitButton>
        <HomeKitButton label="Освещение" href="/lighting" isActive>
          <span className="text-2xl">💡</span>
        </HomeKitButton>
      </div>

      {/* Основной контент */}
      <div className="container mx-auto max-w-2xl space-y-8">
        <div className="grid gap-4">
          {rooms.map((room) => (
            <div key={room.id} className="p-4 bg-white/90 backdrop-blur-md rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{room.name}</h3>
                  <p className="text-sm text-gray-500">{room.isOn ? "On" : "Off"}</p>
                </div>
                <Toggle isOn={room.isOn} onToggle={() => toggleLight(room.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}


