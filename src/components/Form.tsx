import { Button, FormControl, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { SubmitHandler, useForm, useFieldArray} from "react-hook-form";
import React from 'react'
import { Outlet } from 'react-router-dom';
import { Box } from '@material-ui/core';


type FormValues = {
  title: string;
  description: string;
  date: string;
  time: string;
};

const issues: Array<FormValues> = [];

const Form = () => {

  const current = new Date();
  const currDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const currTime = current.getHours() + ':' + current.getMinutes();

  const { register, control, handleSubmit, reset, watch, getValues, formState: { errors }} = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {

    issues.push({title: data.title, description: data.description, date: currDate, time: currTime});
    console.log(issues);
  };

  return (
    <Stack flexWrap="wrap" sx={{ alignItems: "flex-start", width: "fit-content" }}>
       <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2} sx={{width: 300}}>
          <TextField  defaultValue="" label="Issue Title" {...register("title")} />
          <TextField  multiline rows={10} defaultValue="" label="Description" {...register("description")} />

          <Stack direction="row" spacing={4} sx ={{alignSelf: "center"}} >
            <Button variant="contained" type='submit' style={{ width: "fit-content", alignSelf: "center", alignItems: "bottom", marginTop: "1rem" }}>Submit</Button>
            <Button variant="contained" style={{ width: "fit-content", alignSelf: "center", alignItems: "bottom", marginTop: "1rem"}}>Cancel</Button>
          </Stack>
        </Stack>
        
      </form>

    </Stack>
  )
}

export default Form
