'use client';

import { useEffect, useRef, useState } from "react";
import { HomeKitButton } from "@/components/HomeKitButton";

export default function SecurityPage() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const socketRef = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [streaming, setStreaming] = useState(false);

  useEffect(() => {
    socketRef.current = new WebSocket("ws://0.0.0.0:8765"); // или "ws://localhost:8765"

    socketRef.current.onopen = () => {
      setIsConnected(true);
      console.log("WebSocket подключен");
    };

    socketRef.current.onclose = () => {
      setIsConnected(false);
      console.log("WebSocket отключен");
    };

    socketRef.current.onmessage = (event) => {
      const base64Image = event.data as string; // Явно указываем, что event.data — строка
    
      if (imageRef.current && base64Image) {
        imageRef.current.src = `data:image/jpeg;base64,${base64Image}`; // Добавлены кавычки ``
      }
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

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
          <img
            ref={imageRef}
            alt="Видео поток"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-medium">Коридор</h3>
        <p className="text-sm text-gray-500">Прямой эфир</p>
        <p>{isConnected ? "Подключено к WebSocket" : "Ожидание подключения..."}</p>
      </div>
    </div>
  );
}