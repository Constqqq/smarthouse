import { HomeKitButton } from "@/components/HomeKitButton"

export default function HomePage() {
  return (
    <main className="container mx-auto max-w-2xl">
      <h1 className="text-2xl font-semibold text-white mb-8">Мой дом</h1>

      <div className="flex gap-6">
        <HomeKitButton label="Освещение" href="/lighting">
          <span className="text-2xl">💡</span>
        </HomeKitButton>
        <HomeKitButton label="Климат" href="/climate">
          <span className="text-2xl">🌡️</span>
        </HomeKitButton>
        <HomeKitButton label="Вентиляция" href="/ventilation">
          <span className="text-2xl">💨</span>
        </HomeKitButton>
        <HomeKitButton label="Охрана" href="/security">
          <span className="text-2xl">🔒</span>
        </HomeKitButton>
      </div>
    </main>
  )
}

