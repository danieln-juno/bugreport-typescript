import { Button } from '@material-ui/core'
import { Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

function Issues({ }: Props) {
const navigate = useNavigate();
  return (

    <Stack>
      <Button onClick={() => navigate('/')} variant="contained" style={{ width: "fit-content" }}>
        back
      </Button>
    </Stack>
  )
}

export default Issues