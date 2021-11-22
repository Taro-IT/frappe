import axios from 'axios';
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';


type RegisterFormType = {
  readonly email: string;
  readonly name: string;
  readonly password: string;
};

export const useRegisterForm = () => {
  const router = useRouter();
  
  const onSubmit: SubmitHandler<RegisterFormType> = async (data: RegisterFormType) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/accounts/signup`, data)
        .then(res => {
          router.push('/signin');
        });

      console.log('User created');
    } catch (error) {
      console.error(error);
    }
  };

  return { onSubmit };
};
