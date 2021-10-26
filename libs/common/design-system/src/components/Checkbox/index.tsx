import React, { ChangeEventHandler } from 'react';

interface CheckboxProps {
  readonly name: string;
  readonly label: string;
  readonly onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox = ({ name, label, onChange }: CheckboxProps) => {
  return (
    <div className='relative flex items-start'>
      <div className='flex items-center h-5'>
        <input
          id={ name }
          name={ name }
          type='checkbox'
          className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
          onChange={ onChange }
        />
      </div>
      {
        label && (
          <div className='ml-3 text-sm'>
            <label htmlFor={ name } className='font-medium text-gray-700'>
              {label}
            </label>
          </div>
        )
      }
    </div>
  );
}
