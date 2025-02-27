import "@/styles/globals.css"; // Подключает глобальные стили
import type { AppProps } from "next/app"; // Типизация для Next.js
import { Navbar } from "@/components/navbar"; // Импортируем Navbar

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* global navigation */}
      <Navbar />

      {/* Основной контент страницы */}
      <main className="mt-20 p-4"> 
        <Component {...pageProps} />
      </main>
    </>
  );
}
