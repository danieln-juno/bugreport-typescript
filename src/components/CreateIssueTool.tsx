import { Button } from '@material-ui/core'
import { ChromeReaderMode } from '@mui/icons-material'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import html2canvas from 'html2canvas'
import React from 'react'
import Form from './Form'
import Links from './Links'
chrome.tabs.query({ "active": true, "currentWindow": true }, function (tabs) {
  let tabURL = tabs[0].url;
  console.log(tabs[0])
  console.log("url = " + tabURL);
})
//we need to retrieve html of current open tab
function capture() {
  console.log("inside capture");
  const captureElement = document.getElementById('root');
  console.log(captureElement)
  if (captureElement === null) {

  }
  else {
    html2canvas(captureElement)
      .then(canvas => {
        canvas.style.display = 'none'
        document.body.appendChild(canvas)
        return canvas
      })
      .then(canvas => {
        const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
        const a = document.createElement('a')
        a.setAttribute('download', 'my-image.png')
        a.setAttribute('href', image)
        a.click()
        canvas.remove()
      })
  }
}

// const btn = document.getElementById("takeScreenshot_btn");

// if (btn === null) {
//   console.log("empty btn")
// }

// else {
//   btn.addEventListener('click', capture)
// }
type Props = {}
function CreateIssueTool({ }: Props) {

  return (
    <Stack sx={{ width: "100%", height: "90vh", alignItems: "center" }} spacing={2}>
      <h1 style={{ alignSelf: "center", letterSpacing: "0.2rem " }}>Issue Report</h1>
      <Stack direction="row" spacing={4}>
        <Form />
        <Stack direction="column" spacing={4}>
          <Box style={{ backgroundColor: "gray", minHeight: "21rem", maxHeight: "20rem", maxWidth: "20rem" }}>
            HERE WE WILL HAVE A SCREENSHOT CAPTURE ?
          </Box>

          <Button onClick={capture} id='takeScreenshot_btn' variant="contained" style={{ width: "fit-content", alignSelf: "center" }}>Take Screen Shot</Button>
        </Stack>
      </Stack>
      <Links />
    </Stack>
  )
}

export default CreateIssueTool
