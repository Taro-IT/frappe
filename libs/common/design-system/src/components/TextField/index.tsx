import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {useFormContext, RegisterOptions } from "react-hook-form";
import {SpanError} from "../SpanError";

import styles from './TextField.module.scss';

type TextFieldProps<TFieldValues = unknown> =
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  {
    readonly name: string;
    readonly label?: string;
    readonly validations?: RegisterOptions<TFieldValues>
  };


export const TextField = ({ name, type = 'text', label, validations }: TextFieldProps) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      { label && <label className={ styles.text__field__label } htmlFor={ name }> { label } </label> }
      <input className={ styles.text__field__input } type={ type } { ...register(name, validations) } />
      { errors[name] && <SpanError message={ errors[name].message } /> }
    </>

  )
}
