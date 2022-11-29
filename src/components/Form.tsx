import { TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useForm } from "react-hook-form";
import React from 'react'
import { Outlet } from 'react-router-dom';

// type formValues = {
//     company: string,
//     severity: string,
//     email: string,
//     expected_behaviour: string,
//     treating_squad: string,
//     domain: string
// }

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <Stack sx={{ alignItems: "flex-start", width: "fit-content" }}>
      {/* <form onSubmit={handleSubmit((data) => {
        console.log(data)
      })}> */}
        <Stack direction="column" spacing={2} sx={{}}>
          <TextField sx={{width: "fit-content"}} defaultValue="company's name" label="company name" {...register("company")} />
          <TextField sx={{width: "fit-content"}} defaultValue="contact's full name" label="contact's full name" {...register("company")} />
          <TextField sx={{width: "fit-content"}} defaultValue="contact's email" label="contact's email" {...register("company")} />
          <TextField sx={{width: "fit-content"}} defaultValue="domain" label="domain" {...register("company")} />
          <TextField sx={{width: "fit-content"}} defaultValue="company's name" label="company name" {...register("company")} />
        </Stack>
      {/* </form> */}
    </Stack>
  )
}

export default Form