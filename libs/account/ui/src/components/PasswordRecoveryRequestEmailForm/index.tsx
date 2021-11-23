//User story: frappe-503
import { Button, Form, TextField, Alert } from '@frappe/common/design-system';
import { useState } from 'react';
import { Nullable } from '@frappe/common/utils';
import { usePasswordRecoveryRequestEmailForm } from '../../hooks';
import { SubmitHandler } from 'react-hook-form';

export const PasswordRecoveryRequestEmailForm = () => {
  const [generalMessage, setGeneralMessage] = useState<Nullable<string>>(null);
  const { sendRequest } = usePasswordRecoveryRequestEmailForm();
  const onSubmit: SubmitHandler<{ readonly email: string}> = async (data, event) => {
    event?.preventDefault();
    sendRequest(data);
    setGeneralMessage('Si el correo está registrado en el sistema, se le acaba de mandar una liga para reestablecer la contraseña.');
  }

  return (
    <Form className="flex flex-col w-full p-8" onSubmit={onSubmit}>
      {generalMessage && <Alert title={"Correo enviado"} body={generalMessage} color={"gray"}/>}
      <TextField label="Email" type="email" name="email" validations={{ required: 'El email es requerido' }} />
      <Button title="Solicitar liga" type="submit" variant="cta" className={'mt-4'} />
    </Form>
  );
};
