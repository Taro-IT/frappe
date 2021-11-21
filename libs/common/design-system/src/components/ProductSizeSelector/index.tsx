//User Story: Frappe-62
import { useState } from "react"

type ProductSizeSelectorProps = {
  size: number
  setSelectedSize: (nv: number) => any
  selectedSize: number
}

export const ProductSizeSelector = ({ size, setSelectedSize, selectedSize }: ProductSizeSelectorProps) => {


   const toggleSelected = () => {
    setSelectedSize(size);
   } 

  return (
    <div key={size} className={`w-20 h-10 cursor-pointer rounded-md justify-content-center border-2 ${selectedSize == size ? 'border-yellow-400' : 'border-gray-300'} `} onClick={toggleSelected}>
    <div className="mt-1 text-center w-full">{size}</div>
    </div>
  )
}