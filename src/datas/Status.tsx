import { TaskStatus } from "@/types"
import { Status, TaskSquare, TickCircle } from "iconsax-react"

export const taskStatus = [
    {
        label: TaskStatus.TODO,
        icon : <TaskSquare size={15} variant="Bold" color="#CFB7E8" />
        
    },
    {
        label: TaskStatus.IN_PROGRESS,
        icon : <Status size={15} variant="Bold" color="#F6BE38" />
        
    },
    {
        label: TaskStatus.COMPLETED,
        icon : <TickCircle size={15} variant="Bold" color="#75C5C1" />
        
    }
    
]