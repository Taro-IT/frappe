import React, {PropsWithChildren} from "react";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";

type FormProps<FormValues = unknown> = {
  readonly onSubmit: SubmitHandler<FormValues>;
  readonly defaultValues?: Record<string, unknown>;
  readonly className?: string
}

export function Form<FormValues>({ onSubmit, defaultValues, className, children }: PropsWithChildren<FormProps<FormValues>>) {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider { ...methods }>
      <form onSubmit={ methods.handleSubmit(onSubmit) } className={ className }>
        { children }
      </form>
    </FormProvider>
  )
}

