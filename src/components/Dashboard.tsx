import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

function Dashboard({ }: Props) {
  const navigate = useNavigate();
  return (
    <Stack>
      <Button onClick={() => navigate('/')} variant="contained" style={{ width: "fit-content" }}>
        back
      </Button>

    </Stack>
  )
}

export default Dashboard