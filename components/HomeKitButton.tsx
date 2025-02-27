import type React from "react"
import Link from "next/link"

interface HomeKitButtonProps {
  label: string
  href: string
  isActive?: boolean
  children: React.ReactNode
}

export function HomeKitButton({ label, href, isActive, children }: HomeKitButtonProps) {
  return (
    <Link href={href} className="flex flex-col items-center">
      <div
        className={`
        w-48 h-16 mb-2 rounded-3xl flex items-center justify-center
        backdrop-blur-md backdrop-saturate-150
        ${isActive ? "bg-white/100 shadow-lg" : "bg-white/20 hover:bg-white/100 transition-colors"}
      `}
      >
        {children}
      </div>
      <span className="text-sm text-white font-medium">{label}</span>
    </Link>
  )
}

