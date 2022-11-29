import { Button, TextField, Typography } from '@mui/material'
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
    <Stack flexWrap="wrap" sx={{ alignItems: "flex-start", width: "fit-content" }}>
      <form onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>
        <Stack direction="column" spacing={2} sx={{}}>
          <TextField disabled={true} sx={{ width: "fit-content" }} defaultValue="cmpny" label="company's name" {...register("company_name")} />
          <TextField sx={{ width: "fit-content" }} defaultValue="" label="contact's full name" {...register("contact_fullname")} />
          <TextField sx={{ width: "fit-content" }} defaultValue="" label="contact's email" {...register("contact_email")} />
          <TextField sx={{ width: "fit-content" }} defaultValue="" label="domain" {...register("domain")} />
        </Stack>
        <Button style={{ width: "fit-content", alignSelf: "center", alignItems: "bottom" }}>Cancel</Button>
        <Button type='submit' style={{ width: "fit-content", alignSelf: "center", alignItems: "bottom" }}>Submit</Button>
      </form>
    </Stack>
  )
}

export default Form