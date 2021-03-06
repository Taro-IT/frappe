/* This example requires Tailwind CSS v2.0+ */
import { PropsWithChildren, useState } from 'react';
import {OrderStatuses} from '@frappe/order/domain'
import clsx from 'clsx';

type ProgressBarrHeaderProps = {
  readonly status: OrderStatuses;
};

/**
 * @content string - The text that will be displayed in the badge.
 * @color string - The color of the badge (gray, red, yellow, green, blue, indigo, purple or pink).
 */
export const ProgressBar = ({status}: PropsWithChildren<ProgressBarrHeaderProps>) => {
    const [isSuccessful, setIsSuccessful] = useState<boolean>(true);
    
    const getStep = (status: OrderStatuses): number => {
        console.log(status)
        switch (status) {
            case OrderStatuses.ABIERTO:
                return 0;
                break;
            case OrderStatuses.EN_PROCESO:
                return 1;
                break;
            case OrderStatuses.LISTA_PARA_ENVIO:
                return 2;
                break;
            case OrderStatuses.ENTREGADA:
                return 3;
                break;
            case OrderStatuses.COMPLETADA:
                return 3;
                break;
            case OrderStatuses.CANCELADA:
            setIsSuccessful(false);
                return 3;
                break;
            case OrderStatuses.ERRONEA:
            setIsSuccessful(false);
                return 3;
                break;
            default:
                break;
        }
        return -1;
    }
    return (
      <div className="py-6 px-4 sm:px-6 lg:p-8">
            <h4 className="sr-only">Status</h4>
            <div className="mt-6" aria-hidden="true">
                { status == OrderStatuses.CANCELADA && !isSuccessful && (
                    <>
                    <div className="bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-2 bg-red-400 rounded-full"
                            style={{ width: `calc((${3}* 2 + 2) / 8 * 100%)` }} />
                    </div>
                    <div className=" sm:grid grid-cols-4 text-xs font-xs text-gray-600 mt-6 flex justify-evenly">
                            <div className= 'text-red-600 '>
                                {OrderStatuses.CANCELADA}
                            </div>
                    </div>
                    </>
                )}
                {status == OrderStatuses.ERRONEA && !isSuccessful && (
                    <>
                    <div className="bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-2 bg-red-400 rounded-full"
                            style={{ width: `calc((${3}* 2 + 2) / 8 * 100%)` }} />
                    </div>
                    <div className=" sm:grid grid-cols-4 text-xs font-xs text-gray-600 mt-6 flex justify-evenly">
                            <div className= 'text-red-600'>
                                {OrderStatuses.ERRONEA}
                            </div>
                    </div>
                    </>
                )}
                {status == OrderStatuses.COMPLETADA && isSuccessful && (
                    <>
                    <div className="bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-2 bg-blue-400 rounded-full"
                            style={{ width: `calc((${3}* 2 + 2) / 8 * 100%)` }} />
                    </div>
                    <div className=" sm:grid grid-cols-4 text-xs font-xs text-gray-600 mt-6 flex justify-evenly">
                            <div className= 'text-blue-600'>
                                {OrderStatuses.COMPLETADA}
                            </div>
                    </div>
                    </>
                )}
                {isSuccessful && status!== OrderStatuses.COMPLETADA && (
                    <>
                    <div className="bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-2 bg-yellow-400 rounded-full"
                            style={{ width: `calc((${getStep(status)}* 2 + 2) / 8 * 100%)` }} />
                    </div>
                    <div className=" sm:grid grid-cols-4 text-xs font-xs text-gray-600 mt-6 flex justify-evenly">
                        <div className="text-yellow-600 pl-4">{OrderStatuses.ABIERTO}</div>
                            <div className={clsx(getStep(status) > 0 ? 'text-yellow-600' : '', 'text-left')}>
                                {OrderStatuses.EN_PROCESO}
                            </div>
                        <div className={clsx(getStep(status) > 1 ? 'text-yellow-600' : '', 'text-right')}>
                            {OrderStatuses.LISTA_PARA_ENVIO}
                        </div>
                        <div className={clsx(getStep(status) > 2 ? 'text-yellow-600' : '', 'text-right')}>
                            {OrderStatuses.ENTREGADA}
                        </div>
                    </div>
                    </>
                )}
                
            </div>
      </div>
    );
  };