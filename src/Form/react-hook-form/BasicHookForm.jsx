import React from 'react'
import './Basic.css'
import { useForm } from 'react-hook-form'

const BasicHookForm = () => {
    // initialize the useForm hook
    const {
        register,//used to register input fields / connect input to thre form fields
        handleSubmit, //function to handle form submission
        formState:{errors},//object containing validation errors
        reset,//function to reset the form to initial value
    } = useForm();

    // function to handle form submission
    const onSubmit = (data) => {
        console.log(data);
        reset(); //reset the form after submission
        
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        {/* {name } */}
        <label >NAME:</label>
        <input 
        {...register("name",{required: "Name Is Required"})}
         />
         {errors.name && <p style={{color:'red'}}>{errors.name.message}</p>}

         {/* email */}
         <label>EMAIL:</label>
         <input
         {...register("email",{required:"Email Is Required",
            pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:"Invalid Email"
            }
         })}
         />
         {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}

         {/* submission button  */}
         <button type='submit'>SUBMIT</button>

         {/* reset button */}
         <button type='reset' onClick={() => reset()}>RESET</button>
    </form>
  )
}

export default BasicHookForm
