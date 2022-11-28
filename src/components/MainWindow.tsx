import { Typography, Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Form from './Form'

type Props = {}

function MainWindow({ }: Props) {

    return (
        <Stack flexWrap="wrap" direction="column" sx={{ height: "100%", backgroundColor: "red", margin: "2rem" }}>
            <Typography sx={{ fontSize: "2rem", alignSelf: "center" }}>Issues reporting system</Typography>
            <ul>
                <li>
                    <Typography>Create Issue Tool</Typography>
                </li>
                <li>
                    <Typography>Settings</Typography>
                </li>
                <li>
                    <Typography>Issues</Typography>
                </li>
                <li>
                    <Typography>Dashboards</Typography>
                </li>
            </ul>
        </Stack>

    )
}

export default MainWindow