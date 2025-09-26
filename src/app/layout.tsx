
import SideBar from "@/components/sidebar/SideBar";
import "./globals.css";
import Providers from "@/components/Providers";
import NavBar from "@/components/topbbar/TopBar";
import { Box, Flex } from "@chakra-ui/react";
import { TaskContextProvider } from "@/Context";
import CreateTaskModal from "@/components/modal/CreateTaskModal";



export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <TaskContextProvider>
          <Providers>

            <SideBar />
            
            <Flex direction={"column"} h={"100vh"} flex={1} gap={3} >

                <Box 
                  as={"header"} 
                  position={"sticky"} 
                  top={0} 
                  h={"90px"} 
                  borderColor={"red"}
                  bg={"#fff"}
                  zIndex={10}

                >
                  <NavBar />
                </Box>
                <Box
                  as="main"
                  w={"95%"}
                  overflow={"auto"}
                  mx={"auto"}
                  my={3}
                  minHeight={"calc(100vh - 200px)"}
                  p={4}
                  bg={"#fff"}
                >

                  {children}
                </Box>
            </Flex>
              
            <CreateTaskModal />
          </Providers>
        </TaskContextProvider>
      </body>
    </html>
  );
}
