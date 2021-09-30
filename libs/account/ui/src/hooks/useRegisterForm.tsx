import axios from "axios";

type RegisterFormType = {
  readonly email: string;
  readonly name: string;
  readonly password: string;
}

export const useRegisterForm = () => {
  const onSubmit = async (data: RegisterFormType) => {
    try {
      await axios.post(`${ process.env.NEXT_PUBLIC_API_URL }/api/accounts/signup`, data);

      console.log('User created')
    } catch (error) {
      console.error(error);
    }
  }

  return { onSubmit }
}
