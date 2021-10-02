import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {useFormContext, RegisterOptions } from "react-hook-form";
import styles from './TextField.module.scss';
import clsx from "clsx";
import {SpanError} from "../SpanError";

type TextFieldProps<TFieldValues = unknown> =
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  {
    readonly name: string;
    readonly label?: string;
    readonly validations?: RegisterOptions<TFieldValues>
    readonly  order?: 'col' | 'row'
  };


export function TextField<TFieldValues = unknown>({ name, type = 'text', label, order = 'col', validations }: TextFieldProps<TFieldValues>) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className={clsx("flex", order === 'col' ? styles.text__field__col : styles.text__field__row, "mb-1")}>
        { label && <label className={ clsx(styles.text__field__label, 'w-1/3') } htmlFor={ name }> { label } </label> }
        <input className={ clsx(styles.text__field__input, 'w-2/3') } type={ type } { ...register(name, validations) } />
      </div>
      { errors[name] && <SpanError message={ errors[name].message } /> }
    </>
  )
}
