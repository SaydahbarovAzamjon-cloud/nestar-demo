import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community : NextPage = () => {
    const device = useDeviceDetect();
    if( device === "mobile") {
    return (
        <Stack className="container">COMMUNITY MOBILE</Stack>
    )             
    } else {
      return(
        <>
          <div style={{margin:"20px 0px"}}>
            <Stack className="container">COMMUNITY</Stack>
          </div>
        </>
      )
    }     
}

export default withLayoutBasic(Community);