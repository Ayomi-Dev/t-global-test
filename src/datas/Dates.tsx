import { Input } from "@chakra-ui/react";
import React from "react";

export const formatDate =(date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
}
export const dateInput = React.forwardRef<HTMLInputElement, any>(({ value, onClick }, ref) => (
    // just a helper function to allow datepicker use chakra's input as custom input
    <Input
        readOnly
        onClick={onClick}
        ref={ref}
        value={value}
        placeholder="dd/mm/yyyy"
        cursor={"pointer"}
        w={"200px"}
        fontSize={"14px"}
    />
));
export const presets = [
    {
        label: "Today", date: new Date() 
    },
    {
        label: "Tomorrow", date: new Date(Date.now() + 86400000) 
    },
    {
        label: "This Weekend", date: new Date(Date.now() + (6 - new Date().getDay()) * 86400000) 
    },
    {
        label: "Next Week", date: new Date(Date.now() + 7 * 86400000) 
    },
    {
        label: "Next Weekend", date: new Date(Date.now() + (13 - new Date().getDay()) * 86400000) 
    },
    {
        label: "2 Weeks", date: new Date(Date.now() + 14 * 86400000) 
    },
    {
        label: "4 Weeks", date: new Date(Date.now() + 28 * 86400000) 
    }
]