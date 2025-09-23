import { Priority, PriorityLabel } from "@/types";
import { Select } from "@chakra-ui/react";
import { Flag, Status } from "iconsax-react";

export const Priorities: Priority[] = [
    {
        label: PriorityLabel.URGENT,
        flag: <Flag variant="Bold" size={15} color="red"/>
    },
    {
        label: PriorityLabel.IMPORTANT,
        flag: <Flag variant="Bold" size={15} color="#F6BE38"/>
    },
    {
        label: PriorityLabel.MEDIUM,
        flag: <Flag variant="Bold" size={15} color="#75C5C1"/>
    },
    {
        label: PriorityLabel.LOW,
        flag: <Flag variant="Bold" size={15} color="gray"/>
    },
    {
        label: PriorityLabel.NORMAL,
        flag: <Flag variant="Bold" size={15} color="#75C5C1"/>
    }
]

export const priorityColors: Record<string, string> = { //creates a mapping for priority colors to match flag colors
    [PriorityLabel.URGENT]: "red",
    [PriorityLabel.IMPORTANT]: "#F6BE38",
    [PriorityLabel.MEDIUM]: "#75C5C1",
    [PriorityLabel.LOW]: "gray",
    [PriorityLabel.NORMAL]: "#75C5C1",
}

