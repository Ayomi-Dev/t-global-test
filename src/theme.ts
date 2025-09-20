import { extendTheme } from "@chakra-ui/react";
import { Plus_Jakarta_Sans} from "next/font/google"

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"]
})

const theme = extendTheme({
    fonts: {
        heading: jakarta.style.fontFamily,
        body: jakarta.style.fontFamily
    }
        
})


export default theme;