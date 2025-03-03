"use client"

import { useState, useEffect } from "react"
import { HomeKitButton } from "@/components/HomeKitButton"

const THINGSBOARD_SERVER = "http://localhost:8080" // Адрес ThingsBoard
const DEVICE_ID = "8c9244a0-f821-11ef-9e51-0b17572f43f6" // ID устройства в ThingsBoard
const ACCESS_TOKEN = "5Hc4jIDwD6P67viK69pH" // Токен доступа

export default function ClimatePage() {
  const [temperature, setTemperature] = useState<number>(24.0)

  // Получение температуры с ThingsBoard
  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch(
          `${THINGSBOARD_SERVER}/api/plugins/telemetry/${DEVICE_ID}/values/timeseries?keys=temperature`,
          { headers: { "X-Authorization": `Bearer ${ACCESS_TOKEN}` } }
        )
        const data = await response.json()
        if (data.temperature) {
          setTemperature(parseFloat(data.temperature[0].value))
        }
      } catch (error) {
        console.error("Ошибка при получении температуры:", error)
      }
    }

    fetchTemperature()
  }, [])

  // Отправка температуры в ThingsBoard
  const updateTemperature = async (newTemp: number) => {
    try {
      setTemperature(newTemp) // Обновляем UI сразу
      await fetch(`${THINGSBOARD_SERVER}/api/v1/${ACCESS_TOKEN}/telemetry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ temperature: newTemp }),
      })
    } catch (error) {
      console.error("Ошибка при отправке температуры:", error)
    }
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
              onClick={() => updateTemperature(Math.max(16, +(temperature - 0.5).toFixed(1)))}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl"
              disabled={temperature <= 16}
            >
              -
            </button>
            <button
              onClick={() => updateTemperature(Math.min(35, +(temperature + 0.5).toFixed(1)))}
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
