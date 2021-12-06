// User Story: Frappe 64/ frappe-508

import {Card} from '@frappe/common/design-system'
import { ProductPrimitives } from '@frappe/product/domain';
import EditProductForm from '../components/EditProductForm';

interface EditProductContentProps {
    readonly product : ProductPrimitives;
  }

export const EditProduct = ({ product }: EditProductContentProps) =>  {
    return(
    <>
    <div className="w-full h-screen flex flex-col items-center">
        <Card className="flex flex-col xl:w-3/4 lg:w-2/3 md:w-5/12 rounded-xl">
            <Card.Header title="Edita el producto"/>
               { product ? <EditProductForm product={product}/> : <></>}
            <Card.Footer>
            </Card.Footer>
        </Card>
    </div>
    </>
    )
}

