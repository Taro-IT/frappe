import {Button, Checkbox, Form, TextField} from "@frappe/common/design-system";
import {useRegisterForm} from "@frappe/account/ui";

export const AddProductForm = () => {
  const { onSubmit } = useRegisterForm();

  return (
    <Form className="flex flex-col w-full p-8" onSubmit={onSubmit}>
      <TextField label="Nombre del producto" type="name" name="productName" validations={{ required: 'El nombre del producto es requerido' }} />
      <TextField label="Materiales disponibles" name="materials" validations={{ required: 'Los materiales son requeridos' }} />
      <TextField label="Categoría(s)" type="name" name="categories" validations={{ required: 'Debes seleccionar al menos una categoría'}}/>
      <TextField label="Tallas disponibles" type="name" name="sizes" validations={{ required: 'Debes seleccionar al menos una talla' }} />
      <TextField label="Precio" type="name" name="price" validations={{ required: 'El precio es requerido'}}/>
      <TextField label="¿Este producto tiene stock?" type="name" name="stock" />
      <TextField label="Descripción" type="text-area" name="description"/>
      <TextField label="Imágenes" type="name" name="images"/>
      <Checkbox label="¿Es customizable?" name="isCustomizable" />


      <Button title="Agregar producto" type="submit" variant="cta" className={"mt-4"} />
    </Form>
  )
}
