import { Checkbox } from "@frappe/common/design-system"
import { ChangeEventHandler} from "react"

type CategoryCheckboxProps = {
  id: string,
  name: string,
  value: boolean,
  handleCategoryChange?: ChangeEventHandler<HTMLInputElement>,
}

export const CategoryCheckbox = ({id, name, handleCategoryChange, value}:CategoryCheckboxProps) => {

  return <Checkbox key={id} name={ id } label={ name } value={ value } onChange={ handleCategoryChange } />

}