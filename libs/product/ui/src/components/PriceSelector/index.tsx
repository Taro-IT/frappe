import { PriceField } from "@frappe/common/design-system"

export const PriceSelector = () => {
    return(
        <div className="flex w-full ">
            <PriceField name="min-price" />
                <p className="mx-2"> - </p>
            <PriceField name="max-price" />
        </div>
    )
}