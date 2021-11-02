import { useState } from "react"

type SizeSelectorProps = {
  size: string
}

const SizeSelector = ({size}: SizeSelectorProps) => {

  const [isSelected, setIsSelected] = useState<boolean>(false)

  const toggleSelected = () => {
    setIsSelected( previous => !previous)
  }

  return <div className={`w-20 h-10 cursor-pointer rounded-md justify-content-center border-2 ${isSelected ? 'border-yellow-400' : 'border-gray-300'} `} onClick={toggleSelected}>
  <div className="mt-1 text-center w-full">{size}</div>
</div>
}

export default SizeSelector