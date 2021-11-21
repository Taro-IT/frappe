/* This example requires Tailwind CSS v2.0+ */
import { ExclamationIcon } from '@heroicons/react/solid'
import { PropsWithChildren } from 'react';
import clsx from 'clsx';

type AlertProps = {
  readonly title: string;
  readonly body: string;
  readonly color : string;
  readonly className ?: string;
};


/**
 * @title string - The title of the alert.
 * @body string - The text that will be displayed in the alert.
 * @color string - The color of the alert (gray, red, yellow, green, blue, indigo, purple or pink).
 * @className string - optional - The className for the alert.
 */
export const Alert = ({title, body, color, className}: PropsWithChildren<AlertProps>) => {
  return (
    <div className= {clsx(`rounded-md bg-${color}-50 p-4`, className)}>
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon className={`h-5 w-5 text-${color}-400`} aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium text-${color}-800`}>{title}</h3>
          <div className={`mt-2 text-sm text-${color}-700`}>
            <p>
              {body}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}