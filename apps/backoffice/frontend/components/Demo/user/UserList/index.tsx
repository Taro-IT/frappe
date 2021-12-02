//User Story: frappe-505
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import { PlusCircleIcon } from '@heroicons/react/solid';

const UserList = () => {

  const [users, setUsers] = useState([]);
  //Cambiar esta variable por el estado cuando ya se pueda obtener a los usuarios
  // TODO: centralize to state management -> refactor to custom hook
  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users?order=${JSON.stringify({by: '',type: 'NONE'})}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken")
          }
        }
      );
      const data = response.data.result;
      if (data.length !== 0) {
        setUsers(data.items);
      }
    };
    getUsers();
  }, []);

  const useUsers = useMemo(
  () =>
    users.map(user => {
      return (
          <UserCard id={user.id} user={user} key={user.id} />
      );
    }),
  [users]
  );

  return (
    <>
      <div className="flex justify-end pb-4 pr-6 sticky top-0">
          <a title="Agregar usuario" className="bg-green-600 hover:bg-green-500 text-white font-sans p-2 rounded-md" href={'/register'}><PlusCircleIcon width={40}/></a>
        </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 overflow-auto overflow-x-none">
        
        {useUsers.length ? useUsers : 'No tienes usuarios registrados.'}
      </div>
    </>
  );
};

export default UserList;
