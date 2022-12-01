import { Button, FormControl, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { Control, useForm, useFieldArray} from "react-hook-form";
import React from 'react'
import { Outlet } from 'react-router-dom';
import { Box } from '@material-ui/core';


const Form = () => {
<<<<<<< HEAD

  const { register, control, handleSubmit, reset, watch, formState: { errors }} = useForm();
  const { fields, append, remove } = useFieldArray({ name: "issues", control });

  return (
    <Stack flexWrap="wrap" sx={{ alignItems: "flex-start", width: "fit-content" }}>
      <form onSubmit={handleSubmit((data) => {
          append({ issue: { issue_title: data.issue_title, description: data.description } })
          console.log(data);
        })}
      >
        <Stack direction="column" spacing={2} sx={{width: 300}}>
          <TextField  defaultValue="" label="Issue Title" {...register("issue_title")} />
          <TextField  multiline rows={10} defaultValue="" label="Description" {...register("description")} />
        </Stack>
=======
  const { register, handleSubmit, formState: { errors } } = useForm();
  const date = new Date();
  let currentDate = String(date.getDate()) + "/" + String(date.getMonth()) + "/" + String(date.getFullYear()) + " " + date.getHours() + ":" + String(date.getMinutes()) ;
  // {console.log(currentDate)}
  return (
    <Stack flexWrap="wrap" sx={{ alignItems: "flex-start", width: "fit-content" }}>
      <FormControl onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>

      
        <Stack direction="column" spacing={2} sx={{}}>
          <TextField required={true} sx={{ width: "fit-content" }} defaultValue="" label="company's name" {...register("company_name")} />
          <TextField required={true} sx={{ width: "fit-content" }} defaultValue="" label="contact's full name" {...register("contact_fullname")} />
          <TextField required={true} sx={{ width: "fit-content" }} defaultValue="" label="contact's email" {...register("contact_email")} />
          <TextField required={true} sx={{ width: "fit-content" }} defaultValue="" label="domain" {...register("domain")} />
>>>>>>> 3d10f80404546009d62fba843e48759840ef9d89

          {/* <TextField required={true} sx={{ width: "fit-content" }} value={currentDate} disabled={true} defaultValue={currentDate} label="date captured" {...register("captured")} /> */}
          <TextField required={true} sx={{ width: "fit-content" }} value={currentDate} disabled={true} label="date captured" {...register("captured")} />
        
        </Stack>
        </FormControl>
        <Button style={{ width: "fit-content", alignSelf: "center", alignItems: "bottom", marginTop: "1rem" }}>Cancel</Button>
        <Button type='submit' style={{ width: "fit-content", alignSelf: "center", alignItems: "bottom", marginTop: "1rem" }}>Submit</Button>
<<<<<<< HEAD
      </form>
=======
>>>>>>> 3d10f80404546009d62fba843e48759840ef9d89

    </Stack>
  )
}

export default Form