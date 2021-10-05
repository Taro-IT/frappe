import {Button, Form, TextField} from "@frappe/common/design-system";
import React from "react";
import {useRegisterForm} from "../../hooks";

export const RegisterForm = () => {
  const { onSubmit } = useRegisterForm();

  return (
    <Form className="flex flex-col w-full p-8" onSubmit={onSubmit}>
      <TextField label="Email" type="email" name="email" validations={{ required: 'El email es requerido' }} />
      <TextField label="Nombre" name="name" validations={{ required: 'EL nombre es requerido' }} />
      <TextField label="Contraseña" type="password" name="password" validations={{ required: 'La contraseña es requerida', minLength: {
          value: 6,
          message: 'El tamaño mínimo es de seis caracteres',
        } }} />
      <TextField label="Confirma tu contraseña" type="password" name="confirm-password" validations={{ required: 'La contraseña es requerida' }} />

      <Button title="Crear cuenta" type="submit" variant="cta" className={"mt-4"} />
    </Form>
  )
}
