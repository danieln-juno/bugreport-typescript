import { Button } from '@material-ui/core'
import React from 'react'

// we will need first to be able to take a screenshot,
//then to be able to transfer thart screenshot to editor
//in the end, being able to submit and progress with the procedure, 
//or cancel the procedure.

type Props = {}
function CreateIssueTool({ }: Props) {
  return (
    <>
      <h1>Create Issue Tool</h1>


      <Button>cancel</Button>
      <Button>approve</Button>

    </>
  )
}

export default CreateIssueTool