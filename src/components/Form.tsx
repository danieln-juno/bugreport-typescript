import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

type formValues = {
    company: string,
    severity: string,
    email: string,
    expected_behaviour: string,
    treating_squad: string,
    domain: string
}

const Form = () => {
  return (
    <Stack>
        <Typography>Testing</Typography>
    </Stack>
  )
}

export default Form