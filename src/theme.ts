import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import { Plus_Jakarta_Sans} from "next/font/google"

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"]
})

const Button = defineStyleConfig({
    baseStyle:{
        _hover: {}
    }
})

const theme = extendTheme({
    fonts: {
        heading: jakarta.style.fontFamily,
        body: jakarta.style.fontFamily
    },
    components: {
        Button
    }
        
})


export default theme;