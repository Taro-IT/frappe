/* This example requires Tailwind CSS v2.0+ */
import React, { PropsWithChildren } from 'react';
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

    const getStep = (status: OrderStatuses): number => {
        switch (status) {
            case OrderStatuses.ABIERTA:
                return 0;
                break;
            case OrderStatuses.EN_PROCESO:
                return 1;
            case OrderStatuses.LISTA_PARA_ENVIO:
                return 2;
            case OrderStatuses.ENTREGADA:
                return 3;
            default:
                break;
        }
        return -1;
    }
    return (
       <div className="border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8">
            <h4 className="sr-only">Status</h4>
            <div className="mt-6" aria-hidden="true">
                <div className="bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-2 bg-yellow-400 rounded-full"
                    style={{ width: `calc((${getStep(status)} * 2 + 1) / 8 * 100%)` }}
                />
                </div>
                <div className="hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6">
                <div className="text-yellow-600">{OrderStatuses.ABIERTA}</div>
                <div className={clsx(getStep(status) > 0 ? 'text-yellow-600' : '', 'text-center')}>
                    {OrderStatuses.LISTA_PARA_ENVIO}
                </div>
                <div className={clsx(getStep(status) > 1 ? 'text-yellow-600' : '', 'text-center')}>
                {OrderStatuses.EN_PROCESO}
                </div>
                <div className={clsx(getStep(status) > 2 ? 'text-yellow-600' : '', 'text-right')}>
                {OrderStatuses.ENTREGADA}
                </div>
                </div>
            </div>
            </div>
    )
  }

  //b7912d