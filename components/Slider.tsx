import type React from "react"

interface SliderProps {
  label: string
  value: number
  min: number
  max: number
  onChange: (value: number) => void
}

const Slider: React.FC<SliderProps> = ({ label, value, min, max, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
      <span className="mt-1 text-sm">{value}</span>
    </div>
  )
}

export default Slider

