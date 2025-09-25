"use client"


import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { Task, TaskStatus } from "./types";
import { useDisclosure } from "@chakra-ui/react";
import { formatDate } from "./datas/Dates";


interface TaskContextType { //describes the data shape of each task in the list
    tasks: Task[];
    createTask: (task: Task) => void
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    loading: boolean;
    completeTask: (taskId: string) => void
}

//creates the context with a default value
const TaskContext = createContext<TaskContextType | undefined >(undefined)

//sets up the provider component so as to access context values across the application
export const TaskContextProvider: React.FC<{children : ReactNode}> = ( {children} ) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const { isOpen, onOpen, onClose} = useDisclosure();
    const [ loading, setLoading] = useState<boolean>(false)

    const createTask = (task: Task) => { 
        setTasks(prevTasks => [...prevTasks, task]) //adds a new task to the list
        setLoading(true);
        
        setTimeout(() => {
            setLoading(false)
            onClose() //exits the task modal from the screen
            console.log("task created")
        }, 3000);
    }

    const completeTask = (taskId: string) => {
        const taskToComplete = tasks.find(task => task.id === taskId)
        const dateCompleted = formatDate( new Date())

        setTasks(prevTasks =>  
            prevTasks.map(task =>  //cycles through the task list and updates the changes made to the selected task
                task.id === taskToComplete?.id
                    ? 
                { ...task, 
                    status: TaskStatus.COMPLETED,
                    dates: {
                        ...task.dates, //keeps the date created
                        completedAt: dateCompleted //updates the date completed
                    }
                }
                    : 
                task
            )
        ); 
       
    }


    useEffect(() => { //retrieves task data from localstorage
        const storedTasks = localStorage.getItem("tasks");
        if(storedTasks){
            setTasks(JSON.parse(storedTasks))
        }
     }, []);

    useEffect(() => { //persists task data into localstorage
        localStorage.setItem("tasks", JSON.stringify(tasks));
     }, [tasks])



    const values = {
        tasks,
        createTask,
        isOpen,
        onOpen,
        onClose,
        loading,
        completeTask
    }
    return(
        <TaskContext.Provider value={ values }>
            { children }
        </TaskContext.Provider>
    )
}

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if(!context){
        throw new Error("context should be within a provider");
    }

    return context;
}

