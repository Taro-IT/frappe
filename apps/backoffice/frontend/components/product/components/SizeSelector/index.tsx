import { useState, useEffect } from "react"

type SizeSelectorProps = {
  size: number
  setSizesArray: (nv: number[]) => any
  sizesArray: number[]
  selectAll : boolean
}

const SizeSelector = ({size, setSizesArray, sizesArray, selectAll}: SizeSelectorProps) => {

  const [isSelected, setIsSelected] = useState<boolean>(false)
  
  
  useEffect(() => {
    if(sizesArray.includes(size)){
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectAll])

  const toggleSelected = () => {

    setIsSelected( previous => !previous)
    if (!isSelected) {
      setSizesArray([...sizesArray, size])
    }else{
      setSizesArray(sizesArray.filter(sz => sz != size))
    }
  }

  return (
    <div key={size} className={`w-20 h-10 cursor-pointer rounded-md justify-content-center border-2 ${isSelected ? 'border-yellow-400' : 'border-gray-300'} `} onClick={toggleSelected}>
    <div className="mt-1 text-center w-full">{size}</div>
    </div>
  )
}

export default SizeSelector