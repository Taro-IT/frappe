//User Story: frappe-505
import clsx from 'clsx';
import classes from '../UserList.module.scss';
import { Button, Card } from '@frappe/common/design-system';
import * as React from 'react';

type UserCardProps = {
  readonly id;
  readonly user;
};

const UserCard = ({ id, user }: UserCardProps) => {

  type buttonprops = { id: string; name?: string };
  const EditButton = ({ id, name }: buttonprops) => {
        const edit = () => {
            //TODO: lógica del caso de editar cuenta
            console.log("Editando cuenta");
            
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

  return (
    <div>
      <Card className={clsx(classes.users, 'text-center', 'p-4')} key={id}>
        <h1 className='text-2xl'>{user.name}</h1>
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