//User story: frappe-511
import axios from 'axios';
import { SubmitHandler } from 'react-hook-form';

type ResetPasswordFormType = {
  readonly email: string;
  readonly password: string;
};

export const useResetPasswordForm = () => {

  const sendRequest: SubmitHandler<ResetPasswordFormType> = async (data: ResetPasswordFormType) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/accounts/reset-password`, data);

      console.log('The password has been reset.');
    } catch (error) {
      console.error(error);
    }
    
  };

  return { sendRequest };
};
