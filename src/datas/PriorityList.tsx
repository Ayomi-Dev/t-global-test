import { PriorityLabel } from "@/types";
import { Flag } from "iconsax-react";
import React from "react";




export const priorityConfig: Record<PriorityLabel, {label: string; icon: React.ReactNode; color: string}> = { //creates a mapping for priority colors to match flag colors
    [PriorityLabel.URGENT]: {
        label: "Urgent",
        icon: <Flag variant="Bold" size={15} color="red"/>,
        color: "red"
    },
    [PriorityLabel.IMPORTANT]:{
        label: PriorityLabel.IMPORTANT,
        icon: <Flag variant="Bold" size={15} color="#F6BE38"/>,
        color: "#F6BE38",
    }, 
    [PriorityLabel.MEDIUM]:{
        label: PriorityLabel.MEDIUM,
        icon: <Flag variant="Bold" size={15} color="#75C5C1"/>,
        color: "#75C5C1"
    }, 
    [PriorityLabel.LOW]: {
        label: PriorityLabel.LOW,
        icon: <Flag variant="Bold" size={15} color="gray"/>,
        color: 'gray'
    },
    [PriorityLabel.NORMAL]: {
        label: PriorityLabel.NORMAL,
        icon: <Flag variant="Bold" size={15} color="#75C5C1"/>,
        color: "#75C5C1",
    }
}

 