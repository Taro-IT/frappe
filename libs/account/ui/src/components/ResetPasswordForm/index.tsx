//User story: frappe-511
import { Button, Form, TextField, SpanError } from '@frappe/common/design-system';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Nullable } from '@frappe/common/utils';
import { useResetPasswordForm } from '../../hooks';
import { SubmitHandler } from 'react-hook-form';
import { verifyPasswordResetCode } from '@firebase/auth';

type ResetPaswordProps = {
    readonly auth : any
    readonly code : string
}

export const ResetPasswordForm = ({auth, code}: PropsWithChildren<ResetPaswordProps>) => {
  const router = useRouter();
  const [generalError, setGeneralError] = useState<Nullable<string>>(null);
  const { sendRequest } = useResetPasswordForm();
  const onSubmit: SubmitHandler<{ readonly email: string, password: string}> = async (data, event) => {
    event?.preventDefault();
    sendRequest(data);
    setGeneralError('Tu contraseña se ha reestablecido.');
  }

  
  
  useEffect(() => {
      const email = verifyPasswordResetCode(auth, code)
      console.log(email);
  }, [])

  return (
    <Form className="flex flex-col w-full p-8" onSubmit={onSubmit}>
      {generalError && <SpanError message={generalError} />}
      <TextField
        label="Nueva contraseña"
        type="password"
        name="password"
        validations={{
          required: 'La contraseña es requerida',
          minLength: {
            value: 6,
            message: 'El tamaño mínimo es de seis caracteres'
          }
        }}
      />
      <TextField
        label="Confirma tu nueva contraseña"
        type="password"
        name="confirm-password"
        validations={{ required: 'La contraseña es requerida' }}
      />
      <Button title="Reestablecer contraseña" type="submit" variant="cta" className={'mt-4'} />
    </Form>
  );
};
