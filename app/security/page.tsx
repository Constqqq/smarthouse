import { HomeKitButton } from "@/components/HomeKitButton"

export default function SecurityPage() {
  return (
    <div className="container mx-auto max-w-2xl space-y-8">
      <div className="flex items-center gap-4">
        <HomeKitButton label="дом" href="/">
          <span className="text-2xl">🏠</span>
        </HomeKitButton>
        <HomeKitButton label="Охрана" href="/security" isActive>
          <span className="text-2xl">🔒</span>
        </HomeKitButton>
      </div>

      <div className="p-4 bg-white/90 backdrop-blur-md rounded-lg">
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
          <span className="text-4xl">📹</span>
        </div>
        <h3 className="font-medium">Коридор</h3>
        <p className="text-sm text-gray-500">Прямой эфир</p>
      </div>
    </div>
  )
}

