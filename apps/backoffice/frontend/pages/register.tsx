import React from "react";
import {useForm} from "react-hook-form";

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <input placeholder="example@gmail.com" { ...register('email', { required: true }) } />
      { errors.email && <span> Email is required </span> }


      <input placeholder="Raúl" { ...register('name', { required: true }) } />
      <input placeholder="*******" type="password" { ...register('password', { required: true }) } />
      <input placeholder="*******" type="password"  { ...register('confirmPassword', { required: true }) } />

      <button type="submit"> Submit  </button>
    </form>
  )
}

export default RegisterPage;
