"use client"

import { useState } from "react"
import { HomeKitButton } from "@/components/HomeKitButton"

export default function ClimatePage() {
  const [temperature, setTemperature] = useState(24.0)
  const increaseTemperature = () => {
    setTemperature((prev) => Math.min(35, +(prev + 0.5).toFixed(1)))
  }

  const decreaseTemperature = () => {
    setTemperature((prev) => Math.max(16, +(prev - 0.5).toFixed(1)))
  }
  return (
    <div className="container mx-auto max-w-2xl space-y-8">
      <div className="flex items-center gap-4">
        <HomeKitButton label="Дом" href="/">
          <span className="text-2xl">🏠</span>
        </HomeKitButton>
        <HomeKitButton label="Климат" href="/climate" isActive>
          <span className="text-2xl">🌡️</span>
        </HomeKitButton>
      </div>

      <div className="p-6 bg-white/90 backdrop-blur-md rounded-lg">
        <div className="text-center space-y-4">
          <h2 className="text-lg font-medium">Гостинная</h2>
          <div className="text-5xl font-semibold">{temperature}°</div>
          <div className="flex justify-center gap-4">
          <button
              onClick={decreaseTemperature}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl"
              disabled={temperature <= 16}
            >
              -
            </button>
            <button
              onClick={increaseTemperature}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl"
              disabled={temperature >= 35}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

