
import SideBar from "@/components/sidebar/SideBar";
import "./globals.css";
import Providers from "@/components/Providers";
import NavBar from "@/components/topbbar/TopBar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { MainContent } from "@/components/main/MainContent";
import { TaskContextProvider } from "@/Context";
import CreateTaskModal from "@/components/main/CreateTaskModal";



export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <TaskContextProvider>
          <Providers>
              <Grid 
                templateColumns={"250px 1fr"} 
                templateRows={"auto 1fr"}
                minHeight={"100vh"}
                bg={"#f7f7f7"}
              >
                <GridItem 
                  rowSpan={2}
                  as={"aside"} 
                >
                  <SideBar />
                </GridItem>
            
                <GridItem as={"nav"} 
                  bg={"white"} 
                  height={"90px"}
                  shadow={"sm"}
                > 
                  <NavBar />
                </GridItem>
            
                <GridItem as={"main"} >
                      {children}
                </GridItem>
              </Grid>
              <CreateTaskModal />
          </Providers>
        </TaskContextProvider>
      </body>
    </html>
  );
}
