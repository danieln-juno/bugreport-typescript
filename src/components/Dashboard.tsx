import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

type Props = {}

function Dashboard({ }: Props) {
  return (
    <Stack>
      <Button variant="contained" style={{ width: "fit-content" }}>
        back
      </Button>

    </Stack>
  )
}

export default Dashboard