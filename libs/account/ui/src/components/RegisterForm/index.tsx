import { Button, Form, TextField } from '@frappe/common/design-system';
import React, {useState} from 'react';
import { useRegisterForm } from '../../hooks';
import Select from 'react-select';
import { Role } from '@frappe/account/domain'

export const RegisterForm = () => {
  const [selectedRole, setSelectedRole] = useState<Role>(Role.WARESTORE);
  const { onSubmit } = useRegisterForm(selectedRole);

  const roleOptions = [
    {
      value: Role.ADMIN,
      label: "Admin"
    },
    {
      value: Role.WARESTORE,
      label: "Taller"
    }
  ]

  const handleSelectRole = (selectedOption : any) => {
    setSelectedRole(selectedOption.value);
  };

  return (
    <Form className="flex flex-col w-full p-8" onSubmit={onSubmit}>
      <TextField label="Email" type="email" name="email" validations={{ required: 'El email es requerido' }} />
      <TextField label="Nombre" name="name" validations={{ required: 'El nombre es requerido' }} />
      <TextField
        label="Contraseña"
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
        label="Confirma tu contraseña"
        type="password"
        name="confirm-password"
        validations={{ required: 'La contraseña es requerida' }}
      />

      <label className={'w-1/3 mt-4 mb-3'}>Rol</label>
      <Select
        name="userRole"
        options={roleOptions}
        className="basic-multi-select"
        classNamePrefix="Selecciona el rol"
        onChange={handleSelectRole}
        placeholder="Selecciona el rol"
        defaultValue={roleOptions[1]}
      />

      <Button title="Crear cuenta" type="submit" variant="cta" className={'mt-4'} />
    </Form>
  );
};
