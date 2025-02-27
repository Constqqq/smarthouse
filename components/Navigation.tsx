"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaLightbulb, FaThermometerHalf, FaWind, FaShieldAlt } from "react-icons/fa"

const Navigation = () => {
  const pathname = usePathname()

  const navItems = [
    { href: "/lighting", label: "Lighting", icon: FaLightbulb },
    { href: "/climate", label: "Climate", icon: FaThermometerHalf },
    { href: "/ventilation", label: "Ventilation", icon: FaWind },
    { href: "/security", label: "Security", icon: FaShieldAlt },
  ]

  return (
    <nav className="bg-gray-800 text-white p-4 md:w-64">
      <h1 className="text-2xl font-bold mb-6">Smart Home</h1>
      <ul>
        {navItems.map((item) => (
          <li key={item.href} className="mb-4">
            <Link href={item.href} className={`flex items-center ${pathname === item.href ? "text-blue-400" : ""}`}>
              <item.icon className="mr-2" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation

