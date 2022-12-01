import { Button } from '@material-ui/core'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Form from './Form'
import Links from './Links'

// we will need first to be able to take a screenshot,
//then to be able to transfer thart screenshot to editor
//in the end, being able to submit and progress with the procedure, 
//or cancel the procedure.

type Props = {}
function CreateIssueTool({ }: Props) {

  return (
    <Stack sx={{width: "100%", height: "90vh", alignItems: "center"}} spacing={2}>
      <h1 style={{ alignSelf: "center", letterSpacing: "0.2rem " }}>Create Issue Tool</h1>
      <Stack direction="row" spacing={4}>
        <Form />
        <Box style={{ backgroundColor: "gray", minHeight: "20rem", maxHeight: "20rem", maxWidth: "20rem" }}>
          HERE WE WILL HAVE A SCREENSHOT CAPTURE ?
        </Box>
      </Stack>
      <Links/>
    </Stack>
  )
}

export default CreateIssueTool