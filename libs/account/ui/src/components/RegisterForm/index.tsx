import {Button, Form, TextField} from "@frappe/common/design-system";
import React from "react";
import {useRegisterForm} from "../../hooks";

export const RegisterForm = () => {
  const { onSubmit } = useRegisterForm();

  return (
    <Form className="flex flex-col w-full p-8" onSubmit={onSubmit}>
      <TextField label="Email" type="email" name="email" validations={{ required: 'email is required' }} />
      <TextField label="Name" name="name" validations={{ required: 'name is required' }} />
      <TextField label="Password" type="password" name="password" validations={{ required: 'password is required', minLength: {
          value: 6,
          message: 'min length is 6',
        } }} />
      <TextField label="Confirm Password" type="password" name="confirm-password" validations={{ required: 'password confirm is required' }} />

      <Button title="Crear cuenta" type="submit" variant="cta" className={"mt-4"} />
    </Form>
  )
}
