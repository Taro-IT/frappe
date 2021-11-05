import clsx from "clsx"

interface PriceFieldProps{
    readonly label?: string;
    readonly name: string;
}


export const PriceField = ({label, name}: PriceFieldProps) => {
    return (
        <>
            <div className={clsx('flex w-full')}>
            {label && (
            <label className={clsx('w-1/3')} htmlFor={name}>
                {' '}
                {label}{' '}
            </label>
            )}
                <div className= {clsx('relative rounded-md shadow-sm w-full')}>
                    <span className="px-1 absolute inset-y-0 left-0 items-center pointer-events-none">
                        $
                    </span>
                    <input
                        min={1}
                        type="number"
                        name={name}
                        id={name}
                        className="pl-4 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>
            
        </>
    )
  }