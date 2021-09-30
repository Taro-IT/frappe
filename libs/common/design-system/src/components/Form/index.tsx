import React, {PropsWithChildren} from "react";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";

type FormProps<FormValues = unknown> = {
  readonly onSubmit: SubmitHandler<FormValues>;
  readonly btnText?: string;
  readonly className?: string
}

export const Form = ({ onSubmit, btnText, className, children }: PropsWithChildren<FormProps>) => {
  const methods = useForm();

  return (
    <FormProvider { ...methods }>
      <form onSubmit={ methods.handleSubmit(onSubmit) } className={ className }>
        { children }

        <button type="submit"> { btnText || 'Submit' } </button>
      </form>
    </FormProvider>
  )
}

