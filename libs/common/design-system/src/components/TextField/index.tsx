import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { useFormContext, RegisterOptions } from 'react-hook-form';
import styles from './TextField.module.scss';
import clsx from 'clsx';
import { SpanError } from '../SpanError';

type TextFieldProps<TFieldValues = unknown> = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  readonly name: string;
  readonly label?: string;
  readonly validations?: RegisterOptions<TFieldValues>;
  readonly order?: 'col' | 'row';
  readonly value? : string;
  readonly placeholder?: string
};

export function TextField<TFieldValues = unknown>({
  name,
  type = 'text',
  label,
  order = 'col',
  validations,
  value,
  placeholder
}: TextFieldProps<TFieldValues>) {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <>
      <div className={clsx('flex', order === 'col' ? styles.text__field__col : styles.text__field__row, 'mb-1')}>
        {label && (
          <label className={clsx(styles.text__field__label, 'w-1/3')} htmlFor={name}>
            {' '}
            {label}{' '}
          </label>
        )}
        <input placeholder={placeholder} className={clsx(styles.text__field__input, 'w-2/3')} type={type} {...register(name, validations)} value={value}/>
      </div>
      {errors[name] && <SpanError message={errors[name].message} />}
    </>
  );
}
