import { TaskStatus } from "@/types"
import { Status, TaskSquare, TickCircle } from "iconsax-react"
import React from "react"

  
export const statusConfig: Record<TaskStatus, {label: string, icon: React.ReactNode, bg: string}> = {
    [TaskStatus.TODO]: {
        label: TaskStatus.TODO,
        icon: <TaskSquare size={15} variant="Bold" color="#CFB7E8" />,
        bg: "#CFB7E8"
        
    },
    [TaskStatus.IN_PROGRESS]: {
        label: TaskStatus.IN_PROGRESS,
        icon : <Status size={15} variant="Bold" color="#F6BE38" />,
        bg: "#F6BE38"
    },
    [TaskStatus.COMPLETED] : {
        label: TaskStatus.COMPLETED,
        icon : <TickCircle size={15} variant="Bold" color="#75C5C1" />,
        bg: "#75C5C1"
    }
}

