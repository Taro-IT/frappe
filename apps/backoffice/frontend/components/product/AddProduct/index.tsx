import {Card} from '@frappe/common/design-system'
import {AddProductForm} from "@frappe/account/ui";


const AddProduct = () =>  (
    <Card className="">
        <Card.Header title="Crea un nuevo producto"/>
          <AddProductForm />
        <Card.Footer>
        </Card.Footer>

    </Card>
  )


export default AddProduct