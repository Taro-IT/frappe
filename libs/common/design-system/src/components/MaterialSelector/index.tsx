//User story: Frappe 69
import { useEffect, useState } from 'react';
import Select from 'react-select';

interface MaterialSelectorProps {
  readonly bootPart : string
  readonly options : any
  readonly index : number
  readonly images : any[]
  readonly setProductMaterial :  (nv: any) => any
  readonly productMaterial : any
}

export const MaterialSelector = ({ options, index, images, setProductMaterial, productMaterial }: MaterialSelectorProps) => {

  const [selectedMaterial, setSelectedMaterial] = useState<string>();
  const [imageSrc, setImageSrc] = useState<string>(images[0].image);

  useEffect(() => {
    const auxArr = [...productMaterial]
    const auxItem = {...auxArr[index]}
    auxItem.material = options[0].label
    auxArr[index] = auxItem
    setProductMaterial(auxArr);
    setSelectedMaterial(options[0]);
    setImageSrc(images[0].image);
  },[]);


  const handleSelectMaterials = (selectedOption : any) => {
    const auxArr = [...productMaterial]
    const auxItem = {...auxArr[index]}
    auxItem.material = selectedOption.label
    auxArr[index] = auxItem
    setProductMaterial(auxArr);
    setSelectedMaterial(selectedOption);
    images.map( image => {
      if (image.name == selectedOption.label){
        setImageSrc(image.image);
      }
    })
  };


  return (
    <div className="flex flex-row">
      <Select
        name="materials"
        options={options}
        defaultValue={options[0]}
        className="basic-single w-1/2 h-1/4 self-center"
        classNamePrefix="Selecciona el material"
        value={selectedMaterial}
        onChange={handleSelectMaterials}
        placeholder="Selecciona un material"
        />
        {imageSrc == '' ?  <></> : <img src={imageSrc} alt="" className="rounded-lg border-solid border-4 border-light-yellow-800 w-1/4 h-1/4 ml-12"/> }
    </div>
  );
}
