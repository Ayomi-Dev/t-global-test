enum TaskStatus {
    TODO = "To Do",
    IN_PROGRESS = "In Progress",
    COMPLETED = "Completed"
}

export enum PriorityLabel {
    URGENT = "Urgent",
    IMPORTANT = "Important",
    MEDIUM = "Medium",
    LOW = "Low",
    NORMAL = "Normal"
}

export type Priority =  {
    label: PriorityLabel;
    flag: React.ReactNode
}

export type Assignee = {
    name: string;
    image: string;
    id: string;
}


export interface Task{
    name: string;
    assigneeIds: string[];
    status: TaskStatus;
    description: string;
    priority: PriorityLabel
    dates: {
        createdAt: Date;
        completedAt: Date;
    },
    id: string;
}