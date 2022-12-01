import { Button, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

function Settings({ }: Props) {
  const navigate = useNavigate();
  return (
    <Stack>
      <Button onClick={() => navigate('/')} variant="contained" style={{ width: "fit-content" }}>
        back
      </Button>
    </Stack>
  )
}

export default Settings