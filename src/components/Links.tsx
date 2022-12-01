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
function Links({ }: Props) {

    return (
        <Stack flexWrap="wrap" direction="row" sx={{ height: "100%", margin: "2rem" }}>
            <List component={Stack} direction="row">                
                <ListItem component={Link} style={{ width: "fit-content" }} to='/settings'>
                    <Typography>Settings</Typography>
                </ListItem>
                <ListItem component={Link} style={{ width: "fit-content" }} to='/issues'>
                    <Typography>Issues</Typography>
                </ListItem>
                <ListItem component={Link} style={{ width: "fit-content" }} to='/dashboard'>
                    <Typography>Dashboards</Typography>
                </ListItem>
            </List>
        </Stack>

    )
}

export default Links