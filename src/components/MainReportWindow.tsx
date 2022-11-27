import { Typography, Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
type Props = {}

function MainReportWindow({ }: Props) {
    return (
        <Stack flexWrap="wrap">
            <Typography sx={{ fontSize: "2rem", alignSelf: "center" }}>Issues reporting system</Typography>
            <Stack direction="row-reverse" spacing={2} sx={{width: "100%"}}>
                <Button variant="contained" sx={{ width: "6rem" }}>Report</Button>
                <Button variant="contained" sx={{ width: "6rem" }}>Clear</Button>
            </Stack>

        </Stack>
    )
}

export default MainReportWindow