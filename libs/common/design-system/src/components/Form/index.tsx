import React, {PropsWithChildren} from "react";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {wrapError} from "@frappe/common/utils";

type FormProps<FormValues = unknown> = {
  readonly onSubmit: SubmitHandler<FormValues>;
  readonly defaultValues?: Record<string, unknown>;
  readonly className?: string
}

export function Form<FormValues>({ onSubmit, defaultValues, className, children }: PropsWithChildren<FormProps<FormValues>>) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const methods = useForm({ defaultValues });

  const handleSubmit: SubmitHandler<FormValues> = async data => {
    const [error] = await wrapError(onSubmit(data));

    if (error === null) {
      methods.reset();
    }
  }

  return (
    <FormProvider { ...methods }>
      <form onSubmit={ methods.handleSubmit(handleSubmit) } className={ className } noValidate>
        { children }
      </form>
    </FormProvider>
  )
}

