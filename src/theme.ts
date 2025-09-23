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
        Table: {
            baseStyle: {
                th: {
                    textTransform: "none",
                    fontWeight: 700,
                },
                td: {
                    fontSize: "sm"
                },

            },
            variants: {
                simple: {
                    tbody: {
                        tr: {
                            _odd: { bg: "gray.50"},
                            _even: { bg: "white"}
                        },
                    },
                    thead: {
                        th: {
                            color: "#1A1C1E", 
                            borderRight:"2px solid #CDD6E999"
                        }
                    }
                },
            }, 
            sizes: {
                md: {
                    th: { fontSize: "sm", py: 3, px: 4},
                    td: { fontSize: "sm", py: 3, px: 4}
                }
            }
        },
        
    }
        
})


export default theme;