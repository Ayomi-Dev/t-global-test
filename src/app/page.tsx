"use client"

import { MainContent } from "@/components/MainContent";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { Grid, GridItem, Heading } from "@chakra-ui/react"



export default function Home() {
  return ( 
    <Grid 
      templateColumns={"250px 1fr"} templateRows={"auto 1fr"}
       minHeight={"100vh"}
      bg={"#f7f7f7"}
    >
      <GridItem 
        rowSpan={2}
        as={"aside"}
        
      >
        <SideBar />
      </GridItem>

      <GridItem as={"nav"}> 
        <NavBar />
      </GridItem>

      <GridItem    as={"main"} >
        <MainContent />
      </GridItem>
    </Grid>
  );
}
