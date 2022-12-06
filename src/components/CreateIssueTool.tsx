import { Button } from '@material-ui/core'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'
import Form from './Form'
import Links from './Links'
import CropImage from './CropImage'



type Props = {}

function CreateIssueTool({ }: Props) {
  const [imgSrc, setImgSrc] = useState("");
  const [isCropping, isCroppingToggle] = useState(false);
  const capture = (onSuccess: Function): void => {

    chrome.tabs.query({ "active": true, "currentWindow": true }, async (tabs) => {
      let tabURL = tabs[0].url;
      console.log("tab info " + tabs[0])
      console.log("url = " + tabURL);
      isCroppingToggle(!isCropping); // we want to show only the image for cropping
      const res = await chrome.tabs.captureVisibleTab();
      onSuccess(res);


    })
  }
  // const [crop, setCrop] = useState({ unit: '%', width: 100, aspect: 16 / 9 });
  // const [image, setImage] = useState(null);
  // const [output, setOutput] = useState(null);
  // const imgRef = useRef(null);

  return (
    <Stack sx={{ width: "100%", height: "90vh", alignItems: "center" }} spacing={2}>
      {isCropping ? <CropImage imgSrc={imgSrc} setImgSrc={setImgSrc} /> : <div>
        <h1 style={{ alignSelf: "center", letterSpacing: "0.2rem " }}>Issue Report</h1>
        <Stack direction="row" spacing={4}>
          <Form />
          <Stack direction="column" spacing={4}>
            <Box id="box_screenshot" style={{ backgroundColor: "gray", minHeight: "21rem", maxHeight: "20rem", maxWidth: "20rem" }}>
              {imgSrc ?
                <CropImage imgSrc={imgSrc} setImgSrc={setImgSrc} />
                : <></>}
              {/* <img src={imgSrc} id="img_to_change"></img> */}
            </Box>

            <Button onClick={() => capture(setImgSrc)} id='takeScreenshot_btn' variant="contained" style={{ width: "fit-content", alignSelf: "center" }}>Take Screen Shot</Button>
          </Stack>
        </Stack>
        <Links />
      </div>}

    </Stack>
  )
}

export default CreateIssueTool
