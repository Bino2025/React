import React from 'react'
import * as yup  from 'yup';//validation Library
import './yupform.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//defining the validation schema
const schema = yup.object().shape({
  name:yup.string().required("name is required"),
  email:yup.string().email('Invalid Email').required('email is required'),
  age:yup.number().positive().integer().required('Age is required')
})

const YupForm = () => {
  const {register,handleSubmit,formState:{errors},reset} = useForm({resolver:yupResolver(schema)});

  const onSubmit = (data) =>{
    console.log(data);
    reset();
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder='Nmae' />
        <p>{errors.name?.message}</p>

      <input {...register('email')} placeholder='Mail' />
        <p>{errors.email?.message}</p>

      <input {...register('age')} placeholder='Age' />
        <p>{errors.age?.message}</p>
        <button type='submit'>Submit</button>
        <button type='Reset' onClick={() => reset()}>Reset</button>
    </form>
  )
}

export default YupForm
