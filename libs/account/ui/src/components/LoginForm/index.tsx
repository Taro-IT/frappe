import {Button, Form, SpanError, TextField} from "@frappe/common/design-system";
import React, {useState} from "react";
import {UserCredential} from "firebase/auth";
import {Nullable, wrapError} from "@frappe/common/utils";
import {useRouter} from "next/router";
import {SubmitHandler} from "react-hook-form";

type LoginFormProps = {
  onSubmit: (email: string, password: string) => Promise<UserCredential>;
}

// TODO Add validation to Protected Routes
export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const router = useRouter();
  const [generalError, setGeneralError] = useState<Nullable<string>>(null);

  const handleSubmit: SubmitHandler<{ readonly email: string, password: string }> = async (data, event) => {
    event?.preventDefault();

    setGeneralError(null);

    const [submitError,] = await wrapError(onSubmit(data.email, data.password));

    if (submitError !== null) {
      setGeneralError('Usuario o contraseña invalidos');
      return;
    }

    setGeneralError(null);
    return router.push('/dashboard');
  }

  return (
    <Form className="flex flex-col w-full p-8" onSubmit={ handleSubmit }>
      { generalError && <SpanError message={generalError} /> }

      <TextField label="Email" type="email" name="email" validations={{ required: 'El email es requerido' }} />
      <TextField label="Contraseña" type="password" name="password" validations={{ required: 'La contraseña es requerida' }} />

      { /* TODO add remember me check */ }

      <Button title="Iniciar sesión" type="submit" variant="cta" className="mt-4" />
    </Form>
  )
}
