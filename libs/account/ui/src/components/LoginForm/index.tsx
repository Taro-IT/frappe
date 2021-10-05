import {Button, Form, TextField} from "@frappe/common/design-system";
import React from "react";
import firebase from "firebase/app";
import 'firebase/auth';
import {wrapError} from "@frappe/common/utils";
import {useRouter} from "next/router";

export const LoginForm = () => {
  const router = useRouter();

  const onSubmit = async (data: { email: string, password: string }) => {
    const [signInError, response] = await wrapError(firebase.auth().signInWithEmailAndPassword(data.email, data.password));

    if (signInError !== null) {
      console.error(signInError);
    }

    if (response?.user) {
      const [, token] = await wrapError(response.user.getIdToken());

      typeof window !== 'undefined' && window.localStorage.setItem('token', token as string);
    }

    await router.push('/');
  }

  return (
    <Form className="flex flex-col w-full p-8" onSubmit={ onSubmit }>
      <TextField label="Email" type="email" name="email" validations={{ required: 'El email es requerido' }} />
      <TextField label="Contraseña" type="password" name="password" validations={{ required: 'La contraseña es requerida' }} />

      { /* TODO add remember me check */ }

      <Button title="Iniciar sesión" type="submit" variant="cta" className="mt-4" />
    </Form>
  )
}
