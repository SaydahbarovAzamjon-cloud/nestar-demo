import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const CS : NextPage = () => {
    const [title, setTitle] = useState<string>("HELLO")
    const device = useDeviceDetect();
    if( device === "mobile") {
    return (
        <Stack className="container">CS LIST MOBILE</Stack>
    )             
    } else {
      return(
        <>
          <div style={{margin:"20px 0px"}}>
            <Stack className="container">CS LIST</Stack>
          </div>
        </>
      )
      }

}

export default withLayoutBasic(CS);