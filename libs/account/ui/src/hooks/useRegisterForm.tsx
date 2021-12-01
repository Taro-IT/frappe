import axios from 'axios';
import { SubmitHandler } from 'react-hook-form';

type RegisterFormType = {
  readonly email: string;
  readonly name: string;
  readonly password: string;
  role : string;
};

export const useRegisterForm = (selectedRole : string) => {
  
  const onSubmit: SubmitHandler<RegisterFormType> = async (data: RegisterFormType) => {
    data.role = selectedRole;
    
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/accounts/signup`,
        data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken")
          }
        }
      ).then(res => {
        window.location.replace("/users")
      });

      console.log('User created');
    } catch (error) {
      console.error(error);
    }
  };

  return { onSubmit };
};
