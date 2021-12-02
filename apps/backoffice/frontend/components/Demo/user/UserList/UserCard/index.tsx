//User Story: frappe-505
import clsx from 'clsx';
import classes from '../UserList.module.scss';
import { Button, Card, Modal, SpanError } from '@frappe/common/design-system';
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { BadgeCheckIcon, ExclamationIcon } from '@heroicons/react/solid';

type UserCardProps = {
  readonly id;
  readonly user;
};

const UserCard = ({ id, user }: UserCardProps) => {

  const [displayEditModal, setEditModal] = useState<boolean>(false);
  const [currentName, setCurrentName] = useState<string>(user.name);
  const [newName, setNewName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [nameErrors, setNameErrors] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>();
  const [displayResultModal, setDisplayResultModal] = useState<boolean>(false);
  
  

  type buttonprops = { id: string; name?: string };

  const EditButton = ({ id, name }: buttonprops) => {
        const edit = () => {
            setEditModal(true);
            setNameErrors(false);
        };
        return <Button title="Editar"  className="w-24" variant="cta" onClick={edit} />;
      };

  const DeleteButton = ({ id, name }: buttonprops) => {
  const deleteCategory = () => {
      //TODO: lógica del caso de borrar cuenta
      console.log("Eliminano cuenta");
    };
    return <Button title="Eliminar" className="w-24" variant="cta" onClick={deleteCategory} />;
  };

  const updateUser = async (id: string, name: string) => {
    if (name === '' || name === currentName) {
      setNameErrors(true);
      return;
    }
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
        name: name
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authToken")
        }
      });
      setMessage('La cuenta se actualizó con éxito.');
      setDisplayResultModal(true);
      setSuccess(true);
    } catch (error) {
      console.error('La cuenta ya existe.', error);
      setMessage('La cuenta no se pudo editar');
      setSuccess(false);
    }
    setEditModal(false);
    setNameErrors(false);
    setCurrentName(newName);
    return;
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const SaveChangesButton = props => {
    const saveChanges = () => {
      updateUser(props.id, props.name);
    };
    return <Button title="Guardar cambios" onClick={saveChanges} variant="cta" className={'mt-4'} />;
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
            <label className="text-base w-full my-1">Nuevo nombre</label>
            <input
              className="border-2 border-gray-500 rounded w-full placeholder-gray-500"
              placeholder={currentName}
              onChange={handleNameChange}
              type="name"
              name="categoryName"
            />
            {nameErrors && <SpanError message="El nombre no puede ser vacío ni igual al anterior" />}
            <SaveChangesButton id={id} name={newName} />
          </form>
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
        <p className='text-lg mb-8'>Rol: Jefe de taller</p>
        <div className="flex justify-evenly">
            <div>
              <EditButton id={id} name={user.name}/>
            </div>
            <div>
              <DeleteButton id={id} name={user.name} />
            </div>
        </div>
      </Card>
    </div>
  );
};

export default UserCard;