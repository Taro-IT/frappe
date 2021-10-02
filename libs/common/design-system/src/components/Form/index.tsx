import React, {PropsWithChildren} from "react";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";

type FormProps<FormValues = unknown> = {
  readonly onSubmit: SubmitHandler<FormValues>;
  readonly className?: string
}

export function Form<FormValues>({ onSubmit, className, children }: PropsWithChildren<FormProps<FormValues>>) {
  const methods = useForm();

  return (
    <FormProvider { ...methods }>
      <form onSubmit={ methods.handleSubmit(onSubmit) } className={ className }>
        { children }
      </form>
    </FormProvider>
  )
}

