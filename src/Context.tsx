"use client"


import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Task } from "./types";
import { useDisclosure } from "@chakra-ui/react";


interface TaskContextType { //describes the data shape of each task in the list
    tasks: Task[];
    createTask: (task: Task) => void
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

//creates the context with a default value
const TaskContext = createContext<TaskContextType | undefined >(undefined)

//sets up the provider component so as to access context values across the application
export const TaskContextProvider: React.FC<{children : ReactNode}> = ( {children} ) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const { isOpen, onOpen, onClose} = useDisclosure()

    const createTask = (task: Task) => { 
        setTasks(prevTasks => [...prevTasks, task]) //adds a new task to the list
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
        onClose
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

