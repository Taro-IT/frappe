import {Card} from '@frappe/common/design-system'
import {AddProductForm} from "@frappe/account/ui";


const AddProduct = () =>  (
  <div className="w-full h-screen flex flex-col items-center">
    <Card className="flex flex-col xl:w-3/4 lg:w-2/3 md:w-5/12 rounded-xl">
        <Card.Header title="Crea un nuevo producto"/>
          <AddProductForm />
        <Card.Footer>
        </Card.Footer>

    </Card>

  </div>
  )


export default AddProduct