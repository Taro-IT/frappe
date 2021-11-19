import axios from 'axios';
import { SubmitHandler } from 'react-hook-form';

type PasswordRecoveryRequestEmailFormType = {
  readonly email: string;
};

export const usePasswordRecoveryRequestEmailForm = () => {

  const sendRequest: SubmitHandler<PasswordRecoveryRequestEmailFormType> = async (data: PasswordRecoveryRequestEmailFormType) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/password-recovery`, data);

      console.log('Email for password reset sent');
    } catch (error) {
      console.error(error);
    }
    
  };

  return { sendRequest };
};
