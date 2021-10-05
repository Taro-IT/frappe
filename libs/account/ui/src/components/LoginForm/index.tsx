import {Button, Form, TextField} from "@frappe/common/design-system";
import React from "react";
import firebase from "firebase/app";
import 'firebase/auth';
import {UserCredential} from "firebase/auth";
import {wrapError} from "@frappe/common/utils";
import {useRouter} from "next/router";
import {SubmitHandler} from "react-hook-form";

type LoginFormProps = {
  onSubmit: (email: string, password: string) => Promise<UserCredential>;
}

// TODO Add validation to Protected Routes
export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const router = useRouter();

  const handleSubmit: SubmitHandler<{ readonly email: string, password: string }> = async (data, event) => {
    const [submitError, response] = await wrapError(onSubmit(data.email, data.password));

    if (submitError !== null) {
      console.error(submitError);
    }

    console.log(response);
    // TODO Change to /dashboard
    await router.push('/dashboard');
    event?.preventDefault()
  }

  return (
    <Form className="flex flex-col w-full p-8" onSubmit={ handleSubmit }>
      <TextField label="Email" type="email" name="email" validations={{ required: 'El email es requerido' }} />
      <TextField label="Contraseña" type="password" name="password" validations={{ required: 'La contraseña es requerida' }} />

      { /* TODO add remember me check */ }

      <Button title="Iniciar sesión" type="submit" variant="cta" className="mt-4" />
    </Form>
  )
}
