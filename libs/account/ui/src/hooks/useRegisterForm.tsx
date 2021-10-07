import axios from "axios";
import {SubmitHandler} from "react-hook-form";

type RegisterFormType = {
  readonly email: string;
  readonly name: string;
  readonly password: string;
}

export const useRegisterForm = () => {
  const onSubmit: SubmitHandler<RegisterFormType> = async (data: RegisterFormType) => {
    try {
      await axios.post(`${ process.env.NEXT_PUBLIC_API_URL }/accounts/signup`, data);

      console.log('User created')
    } catch (error) {
      console.error(error);
    }
  }

  return { onSubmit }
}
