import { useState } from "react"
import { XCircleIcon } from '@heroicons/react/solid'

type DisableTextInputProps = {
    index: number
    partName: string
    partArr: string[]
    setCustomParts :  (newValue : string[]) => unknown
}

const DisableTextInput = ({index, partName, partArr, setCustomParts}: DisableTextInputProps) => {

    const handleDeletePart = () => {
        const newArr = partArr.filter(parte => parte != partName);
        setCustomParts(newArr);
        //console.log(newArr);
    }

    return(
        <div>
            <div>
                <div className="m-2 relative rounded-md shadow-sm  w-1/2">
                    <input
                        type="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-base border-gray-300 p-1 px-6 rounded-full"
                        placeholder={partName}
                        disabled
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-auto">
                        <XCircleIcon className="h-5 w-5 text-gray-400 z-50" aria-hidden="true" onClick={handleDeletePart}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisableTextInput