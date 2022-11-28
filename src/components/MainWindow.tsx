import { Typography, Button, List, ListItem } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'

type Props = {}

/*
**********************************************************
these are our capabilities once user clicked the extension
**********************************************************
*/

// to add for each list item
// import { Link } from "react-router-dom";
// <ListItem button component={Link} to="/design">

/*
        notes
    -------------
1. redirect to what url? (settings of Juno platform? settings of the extension? same q for dashboard)
2. 

*/
function MainWindow({ }: Props) {

    return (
        <Stack flexWrap="wrap" direction="column" sx={{ height: "100%", backgroundColor: "red", margin: "2rem" }}>
            <Typography sx={{ fontSize: "2rem", alignSelf: "center" }}>Issues reporting system</Typography>
            <List>
                <ListItem component={Link} to='/createissue' >
                    <Typography>Create Issue Tool</Typography>
                </ListItem>
                <ListItem component={Link} to='/settings'>
                    <Typography>Settings</Typography>
                </ListItem>
                <ListItem component={Link} to='/issues'>
                    <Typography>Issues</Typography>
                </ListItem>
                <ListItem component={Link} to='/dashboard'>
                    <Typography>Dashboards</Typography>
                </ListItem>
            </List>
        </Stack>

    )
}

export default MainWindow