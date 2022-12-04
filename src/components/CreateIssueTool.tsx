import { Button } from '@material-ui/core'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Form from './Form'
import Links from './Links'


type Props = {}
function CreateIssueTool({ }: Props) {

  return (
    <Stack sx={{ width: "100%", height: "90vh", alignItems: "center" }} spacing={2}>
      <h1 style={{ alignSelf: "center", letterSpacing: "0.2rem " }}>Issue Report</h1>
      <Stack direction="row" spacing={4}>
        <Form />
        <Stack direction="column" spacing={4}>
          <Box style={{ backgroundColor: "gray", minHeight: "21rem", maxHeight: "20rem", maxWidth: "20rem" }}>
            HERE WE WILL HAVE A SCREENSHOT CAPTURE ?
          </Box>

          <Button variant="contained" style={{ width: "fit-content", alignSelf: "center" }}>Take Screen Shot</Button>
        </Stack>
      </Stack>
      <Links />
    </Stack>
  )
}

export default CreateIssueTool
