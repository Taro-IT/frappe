/* This example requires Tailwind CSS v2.0+ */
import { PropsWithChildren } from 'react';

type BadgeHeaderProps = {
  readonly content: string;
  readonly color: string;
};

/**
 * @content string - The text that will be displayed in the badge.
 * @color string - The color of the badge (gray, red, yellow, green, blue, indigo, purple or pink). 
 */
export const Badge = ({content, color}: PropsWithChildren<BadgeHeaderProps>) => {
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-${color}-100 text-gray-800`}>
          {content}
        </span>
    )
  }