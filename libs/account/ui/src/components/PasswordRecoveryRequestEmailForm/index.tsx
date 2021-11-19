import { Button, Form, TextField, SpanError } from '@frappe/common/design-system';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Nullable } from '@frappe/common/utils';
import { usePasswordRecoveryRequestEmailForm } from '../../hooks';
import { SubmitHandler } from 'react-hook-form';

export const PasswordRecoveryRequestEmailForm = () => {
  const router = useRouter();
  const [generalError, setGeneralError] = useState<Nullable<string>>(null);
  const { sendRequest } = usePasswordRecoveryRequestEmailForm();
  const onSubmit: SubmitHandler<{ readonly email: string}> = async (data, event) => {
    event?.preventDefault();
    sendRequest(data);
    setGeneralError('Si el correo está registrado en el sistema, se le acaba de mandar una liga para reestablecer la contraseña.');
  }

  return (
    <Form className="flex flex-col w-full p-8" onSubmit={onSubmit}>
      {generalError && <SpanError message={generalError} />}
      <TextField label="Email" type="email" name="email" validations={{ required: 'El email es requerido' }} />
      <Button title="Solicitar liga" type="submit" variant="cta" className={'mt-4'} />
    </Form>
  );
};
