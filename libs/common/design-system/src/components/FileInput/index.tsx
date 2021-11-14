import { useEffect, useState } from "react";

type FileInputProps = {
  multiple: boolean
  required: boolean
  setFiles: (nv: any) => any
  clear: boolean
}

export const FileInput = ({multiple, required, setFiles, clear}: FileInputProps) => {
  const [isFileSet, setFile] = useState<boolean>(false)
  const [names, setFileNames] =useState<string[]>()
  const [inputKey, setInputKey] = useState<string>()

  useEffect(() => {
    if(clear === true) {
      let randomString = Math.random().toString(36);
      setInputKey(randomString)
      setFile(false)
    }
  }, [clear])
  
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(pv => !pv)
    if (!e || !e.target || !e.target.files || e.target.files.length === 0) {
      return;
    }
    if (!multiple) {
      const name = e.target.files[0].name;
      setFileNames([name])
      setFiles(e.target.files[0]);
    }
    // else{
    //   /*TODO: VALIDATE IT WORKS FOR MANY FILES*/
    //   const files = e.target.files;
    //   const fileArray = Array.from(files);
    //   const filesLength = files.length;
    //   const fileNames : string[] = []
    //   for(let i = 0; i < filesLength; i++ ){
    //     const{ name } = files.item(i);
    //     fileNames.push(name);
    //   }
    //   setFileNames(fileNames)
    //   setFiles(fileArray);
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
          border-dashed border-2 border-gray-200
          cursor-pointer
          text-yellow-400
          ease-linear
          transition-all
          duration-150
          mb-2
        "
        >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
        <span className="text-base leading-normal">{isFileSet ? `Archivos cargados: ${names}`: "Selecciona un archivo"}</span>
        <input key={inputKey ? inputKey : ""} onChange={onChangeFile} multiple={multiple} type="file" className="hidden" required={required}/>
      </label>
    </>
  );
};
