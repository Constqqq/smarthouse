import { create } from "zustand"

interface SmartHomeState {
  lights: { [key: string]: boolean }
  temperature: number
  humidity: number
  acOn: boolean
  acTemperature: number
  kitchenFan: boolean
  bathroomFan: boolean
  setLight: (room: string, status: boolean) => void
  setTemperature: (temp: number) => void
  setHumidity: (humidity: number) => void
  setAC: (status: boolean) => void
  setACTemperature: (temp: number) => void
  setKitchenFan: (status: boolean) => void
  setBathroomFan: (status: boolean) => void
}

const useSmartHomeStore = create<SmartHomeState>((set) => ({
  lights: { livingRoom: false, kitchen: false, bedroom: false },
  temperature: 22,
  humidity: 50,
  acOn: false,
  acTemperature: 24,
  kitchenFan: false,
  bathroomFan: false,
  setLight: (room, status) => set((state) => ({ lights: { ...state.lights, [room]: status } })),
  setTemperature: (temp) => set({ temperature: temp }),
  setHumidity: (humidity) => set({ humidity }),
  setAC: (status) => set({ acOn: status }),
  setACTemperature: (temp) => set({ acTemperature: temp }),
  setKitchenFan: (status) => set({ kitchenFan: status }),
  setBathroomFan: (status) => set({ bathroomFan: status }),
}))

export default useSmartHomeStore

