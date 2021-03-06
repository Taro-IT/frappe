//User story: frappe-511
import { Button, Form, TextField, SpanError } from '@frappe/common/design-system';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Nullable } from '@frappe/common/utils';
import { useResetPasswordForm } from '../../hooks';
import { SubmitHandler } from 'react-hook-form';


type ResetPaswordProps = {
    readonly mail : any
}

export const ResetPasswordForm = ({mail}: PropsWithChildren<ResetPaswordProps>) => {

  const [generalError, setGeneralError] = useState<Nullable<string>>(null);
  const [email, setEmail] = useState<string>(mail)
  const { sendRequest } = useResetPasswordForm();
  const onSubmit: SubmitHandler<{ password: string }> = async (data, event) => {
    event?.preventDefault();
    sendRequest({...data, email: email});
    setGeneralError('Tu contraseña se ha reestablecido.');
  }

  useEffect(() => {
    setEmail(mail)
  }, [mail])
  console.log(email)
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
