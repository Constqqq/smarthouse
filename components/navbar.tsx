// components/Navbar.tsx
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex gap-6">
      <Link href="/lighting">
        <span className="text-2xl cursor-pointer">💡 Освещение</span>
      </Link>
      <Link href="/climate">
        <span className="text-2xl cursor-pointer">🌡️ Климат</span>
      </Link>
      <Link href="/ventilation">
        <span className="text-2xl cursor-pointer">💨 Вентиляция</span>
      </Link>
      <Link href="/security">
        <span className="text-2xl cursor-pointer">🔒 Охрана</span>
      </Link>
    </nav>
  );
}
