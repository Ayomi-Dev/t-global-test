import { TaskStatus } from "@/types"
import { Status, TaskSquare, TickCircle } from "iconsax-react"
import React from "react"

  
export const statusConfig: Record<TaskStatus, {label: string, icon: (color?: string) => React.ReactNode, bg: string}> = {
    [TaskStatus.TODO]: {
        label: TaskStatus.TODO,
        icon: (color = "#cfb7e8" ) => <TaskSquare size={15} variant="Bold" color={color} />,
        bg: "#CFB7E8"
        
    },
    [TaskStatus.IN_PROGRESS]: {
        label: TaskStatus.IN_PROGRESS,
        icon: (color = "#f6be38" ) => <Status size={15} variant="Bold" color={color} />,
        bg: "#F6BE38"
    },
    [TaskStatus.COMPLETED] : {
        label: TaskStatus.COMPLETED,
        icon: (color = "#75c5c1" ) => <TickCircle size={15} variant="Bold" color={color} />,
        bg: "#75C5C1"
    }
}

