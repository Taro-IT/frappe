import { useState } from "react";

type FileInputProps = {
  multiple: boolean
  required: boolean
}

export const FileInput = ({multiple, required}: FileInputProps) => {
  const [isFileSet, setFile] = useState<boolean>(false)
  const [fileNames, setFileNames] =useState<string[]>()
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile( pv => !pv)
    const files = e.target.files;
    console.log(files);
    if (files === null || files === undefined) return
    for (let i = 0; i < files.length; i++) {
      let file = files.item(i);
      setFileNames(pv => [...pv, file.name])
    }
    
    // if (files === null || files === undefined) return
    // const filesLength = files.length;
    // for(let i = 0; i < filesLength; i++ ){
    //   const{ name } = files.item(i);
    //   setFileNames(pv => [...pv, name] )
    // }
  }

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/@tailwindcss/custom-forms@0.2.1/dist/custom-forms.css"
        rel="stylesheet"
      />
      <label
        className="
          w-full
          flex flex-col
          items-center
          py-6
          bg-gray-100
          rounded-md
          tracking-wide
          uppercase
          h-auto
          border-2 border-gray-200
          cursor-pointer
          text-yellow-400
          ease-linear
          transition-all
          duration-150
          mb-2
        "
        >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>        
        <span className="text-base leading-normal">{isFileSet ? `Archivos cargados: ${fileNames}`: "Selecciona un archivo"}</span>
        <input onChange={handleFileChange} multiple={multiple} type="file" className="hidden" required={required}/>
      </label>
    </>
  );
};
