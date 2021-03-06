//User Story: frappe-505
import clsx from 'clsx';
import classes from '../UserList.module.scss';
import { Button, Card, Modal, SpanError } from '@frappe/common/design-system';
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { BadgeCheckIcon, ExclamationIcon } from '@heroicons/react/solid';
import Select from 'react-select';
import { Role } from '@frappe/account/domain'

type UserCardProps = {
  readonly id;
  readonly user;
};

export interface User {
  readonly id: string,
  readonly name?:string
}

const UserCard = ({ id, user }: UserCardProps) => {

  const [displayEditModal, setEditModal] = useState<boolean>(false);
  const [currentName, setCurrentName] = useState<string>(user.name);
  const [newName, setNewName] = useState<string>(user.name);
  const [message, setMessage] = useState<string>('');
  const [nameErrors, setNameErrors] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>();
  const [displayResultModal, setDisplayResultModal] = useState<boolean>(false);
  const [currentRole, setCurrentRole] = useState(user.role)
  const [selectedRole, setSelectedRole] = useState<Role>(user.role);
  const [displayDeleteModal, setDeleteModal] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User>()

  type buttonprops = { id: string; name?: string };

  const EditButton = ({ id, name }: buttonprops) => {
    const edit = () => {
        setEditModal(true);
        setNameErrors(false);
    };
    return <Button title="Editar"  className="w-24" variant="cta" onClick={edit} />;
  };

  const ConfirmDeleteUser = ({ id }: User) => {
    const confirmDelete = async () => {
      try {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("authToken")
            }
          }
        );
        setMessage('Usuario borrado exitosamente.');
        setSuccess(true);
      } catch (error) {
        console.error('El usuario no se pudo borrar', error);
        setMessage('Hubo un error, el usuario no se pudo borrar.');
        setSuccess(false);
      }
      setDeleteModal(false);
      setDisplayResultModal(true);
      window.location.reload();
      return;
    };
    return <Button title="Eliminar" onClick={confirmDelete} variant="cta" className={'mt-4'} />;
  };

  const DeleteButton = ({ id, name }: buttonprops) => {
  const deleteCategory = () => {
      setDeleteModal(true);
      setCurrentUser({ id, name });
      console.log("Eliminano cuenta");
    };
    return <Button title="Eliminar" className="w-24" variant="cta" onClick={deleteCategory} />;
  };

  const updateUser = async (id: string, name: string, role: string) => {
    if (name === '') {
      setNameErrors(true);
      return;
    }
    if (name === currentName && role === currentRole)
    {
      setEditModal(false);
      return;
    }
    try {
      console.log("role:", role)
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
        name: name,
        role: role
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authToken")
        }
      });
      setMessage('La cuenta se actualiz?? con ??xito.');
      setDisplayResultModal(true);
      setSuccess(true);
    } catch (error) {
      console.error('Error: ', error);
      setMessage('La cuenta no se pudo editar');
      setSuccess(false);
    }
    setEditModal(false);
    setNameErrors(false);
    setCurrentName(newName);
    setCurrentRole(selectedRole);
    return;
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const SaveChangesButton = props => {
    const saveChanges = () => {
      updateUser(props.id, props.name, props.role);
    };
    return <Button title="Guardar cambios" onClick={saveChanges} variant="cta" className={'mt-4'} />;
  };

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

  const handleSelectRole = selectedOption => {
    setSelectedRole(selectedOption.value);
  };
  
  return (
    <div>
      {displayEditModal && (
        <Modal
          title={`Editar cuenta de ${currentName}`}
          showModal={displayEditModal}
          toggleModal={setEditModal}
        >
          <form className="flex flex-col w-full px-20 mb-4 py-2">
            <label className="text-base w-full my-1">Nombre</label>
            <input
              className="border-2 border-gray-500 rounded w-full placeholder-gray-500"
              placeholder={currentName}
              onChange={handleNameChange}
              defaultValue={currentName}
              type="name"
              name="categoryName"
            />
            {nameErrors && <SpanError message="El nombre no puede estar vac??o" />}
            <label className={'w-1/3 mt-4 mb-3'}>Rol</label>
            <Select
              name="role"
              options={roleOptions}
              className="basic-multi-select"
              classNamePrefix="Selecciona el rol"
              onChange={handleSelectRole}
              placeholder="Selecciona el rol"
              defaultValue={user.role === Role.ADMIN ? roleOptions[0] : roleOptions[1]}
            />
            <SaveChangesButton id={id} name={newName} role={selectedRole} />
          </form>
        </Modal>
      )}
      {displayDeleteModal && (
        <Modal showModal={displayDeleteModal} toggleModal={setDeleteModal} title="Eliminar usuario">
          <div className="flex flex-col w-full px-20 mb-4 py-2 justify-center">
            <p className="text-2xl text-center mb-4">
              ??Est??s seguro de querer borrar el usuario {currentUser.name}?
            </p>
            <p className="text-sm text-red-500 text-center">
              Esta acci??n es irreversible.
            </p>
            <ConfirmDeleteUser id={currentUser.id} />
          </div>
        </Modal>
      )}
      {displayResultModal && (
        <Modal showModal={displayResultModal} toggleModal={setDisplayResultModal} title="">
          <div className="flex flex-col w-full px-20 mb-4 -mt-10 justify-center items-center">
            {success && <BadgeCheckIcon className="items-center h-32 w-32 text-green-400 mb-6" />}
            {!success && <ExclamationIcon className="items-center h-32 w-32 text-red-500 mb-6" />}
            <p className="text-2xl text-center mb-4">{message}</p>
          </div>
        </Modal>
      )}
      <Card className={clsx(classes.users, 'text-center', 'p-4')} key={id}>
        <h1 className='text-2xl'>{currentName}</h1>
        <hr className="mb-2"/>
        <p className='text-lg'>Correo: {user.email}</p>
        <p className='text-lg mb-8'>Rol: {currentRole}</p>
        <div className="flex justify-evenly">
            <div>
              <EditButton id={id} name={user.name}/>
            </div>
            <div>
              <DeleteButton id={user.id} name={user.name} />
            </div>
        </div>
      </Card>
    </div>
  );
};

export default UserCard;