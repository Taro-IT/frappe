import { PriceField } from "@frappe/common/design-system"

type PriceSelectorProps = {
    readonly setMinPrice: (nv: number) => any;
    readonly setMaxPrice: (nv: number) => any;
}

export const PriceSelector = ({setMinPrice, setMaxPrice}: PriceSelectorProps) => {
    return(
        <div className="flex w-full ">
            {/* <PriceField setPrice={setMinPrice} name="min-price" /> */}
                {/* <p className="mx-2"> - </p> */}
            <PriceField setPrice={setMaxPrice} name="max-price" />
        </div>
    )
}