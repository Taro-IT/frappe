import {Card} from '@frappe/common/design-system'
import {AddProductForm} from "@frappe/common/design-system";


const AddProduct = () =>  (
    <Card className="w-50">
        <Card.Header title="Crea un nuevo producto"/>
          <AddProductForm />
        <Card.Footer>
        </Card.Footer>

    </Card>
  )


export default AddProduct