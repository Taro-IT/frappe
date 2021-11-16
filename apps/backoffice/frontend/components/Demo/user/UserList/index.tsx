//User Story: frappe-505
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const UserList = () => {
  //Cambiar esta variable por el estado cuando ya se pueda obtener a los usuarios
  const users = [
    {
      name: "Jan Limpnes Gutiérrez",
      id: "1",
      email: "jan_limpens@gmail.com"
    },
    {
      name: "Eric Buitrón Lopez",
      id: "2",
      email: "ericbuitron3@gmail.com"
    },
    {
      name: "Doris Doris Doris",
      id: "3",
      email: "dorisdecinica@cinica.com"
    },
    {
      name: "Mauricio Alvarez Milán",
      id: "4",
      email: "maualvavlavls@gmail.com"
    },
    {
      name: "Ivan",
      id: "5",
      email: "ivan@gmail.com"
    },
    {
      name: "Karla",
      id: "6",
      email: "karla@gmail.com"
    }
  ]
  //const [users, setUsers] = useState();

  // TODO: centralize to state management -> refactor to custom hook
//   useEffect(() => {
//     const getUsers = async (): Promise<void> => {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users&order=${JSON.stringify({by: '',type: 'NONE'})}`);
//       console.log(response);
//       const data = response.data.result;
//       console.log(data);
//       if (data.length !== 0) {
//         setUsers(data);
//       }
//     };
//     getUsers();
//   }, []);

  const useUsers = useMemo(
  () =>
    users.map(user => {
        console.log(user);
      return (
          <UserCard id={user.id} user={user} key={user.id} />
      );
    }),
  [users]
  );

  //grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1
  return (
    <div className=" w-full h-full overflow-y-scroll ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1 p-9">{useUsers.length ? useUsers : 'No tienes usuarios registrados.'}</div>
    </div>
  );
};

export default UserList;
