import { Button, FormControl, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { Control, useForm, useFieldArray} from "react-hook-form";
import React from 'react'
import { Outlet } from 'react-router-dom';
import { Box } from '@material-ui/core';


const Form = () => {

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

        <Button style={{ width: "fit-content", alignSelf: "center", alignItems: "bottom", marginTop: "1rem" }}>Cancel</Button>
        <Button type='submit' style={{ width: "fit-content", alignSelf: "center", alignItems: "bottom", marginTop: "1rem" }}>Submit</Button>
      </form>

    </Stack>
  )
}

export default Form