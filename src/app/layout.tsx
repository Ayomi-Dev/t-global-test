
import SideBar from "@/components/sidebar/SideBar";
import "./globals.css";
import Providers from "@/components/Providers";
import NavBar from "@/components/topbbar/TopBar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { MainContent } from "@/components/main/MainContent";
import { TaskContextProvider } from "@/Context";
import CreateTaskModal from "@/components/modal/CreateTaskModal";
import { relative } from "path";



export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <TaskContextProvider>
          <Providers>
              <Box 
                minHeight={"100vh"}
                bg={"#f7f7f7"}
                position={"relative"}
                display={"flex"}
              >
                <SideBar />
                
            
                <Box as={"main"} position={"relative"} w={"80%"} flex={1}  >
                  <NavBar />
                  {children}
                </Box>
              </Box>
              <CreateTaskModal />
          </Providers>
        </TaskContextProvider>
      </body>
    </html>
  );
}
