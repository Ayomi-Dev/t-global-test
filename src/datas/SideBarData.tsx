import { Call, Category, Edit, Folder2, Menu, MenuBoard, MessageEdit, Note, NotificationBing, People, Stickynote, TaskSquare } from "iconsax-react";
import { BiMenu, BiMessageEdit, BiNote, BiNotepad, BiNotification, BiPhone } from "react-icons/bi";
import { BsFolder, BsGrid } from "react-icons/bs";
import { HiOutlineDocumentText, HiOutlineUserGroup } from "react-icons/hi";

export type MenuItem =  {
    label: string;
    icon: React.ReactNode;
    path?: string;
    subMenu: { label: string; path?: string}[]

}

export const SideBarData = [
    {
        label: "Home",
        icon: <Category size={20} variant="Linear" color="#292D32" fontWeight={400} />,
        path: '/'
    },
    {
        label: "MKVanBinnen",
        icon: <Stickynote size={20} variant="Linear" color="#292D32" />,
        path: '/profile'
    },
    {
        label: "Document Management",
        icon: <Folder2 size={20} variant="Linear" color="#292D32" />,
        path: '/manage'
    },
    {
        label: "Patient Information",
        icon: <People size={20} variant="Linear" color="#292D32" />,
        path: '/info'
    },
    {
        label: "Agenda",
        icon: <Note size={20} variant="Linear" color="#292D32" />,
        subMenu: [ 
            {
                label: "News",
                path: '/news'
            },
            {
                label: "Members",
                path: "/members"
            },
            {
                label: "To-Do",
                path: "/todos"
            },
            {
                label: "Form Task",
                path: "/task"
            },
            {
                label: "Agenda",
                path: "/agenda"
            },
            {
                label: "Follow up system",
                path: "/follow-up"
            },
            {
                label: "Group Settings",
                subMenu: [

                ]
            },

        ],
    },
    {
        label: "Phone numbers",
        icon: <Call size={20} variant="Linear" color="#292D32" />,
        path: "/phone"
    },
    {
        label: "My todo protocols",
        icon: <TaskSquare size={20} variant="Linear" color="#292D32" />,
        path: "/protocols"
    },
    {
        label: "Notifications",
        icon: <NotificationBing size={20} variant="Linear" color="#292D32" />,
        path: "/notifications"
    },
    {
        label: "Knowledge Base",
        icon: <MenuBoard size={20} variant="Linear" color="#292D32" />,
        path: "/base"
    },
    {
        label: "Super Admin",
        icon: <MessageEdit size={20} variant="Linear" color="#292D32" />,
        path: "/super-admin"
    },
    {
        label: "Admin",
        icon: <Edit size={20} variant="Linear" color="#292D32" />,
        subMenu: [
            {
                label: "Agenda",
                path: "/admin-agenda"
            },
            {
                label: "News",
                path: "/admin-news"
            },
            {
                label: "Poll",
                path: "/admin-poll"
            },
            {
                label: "Department Rules",
                path: "/dept-rules"
            },
            {
                label: "Follow up system",
                path: "/admin-follow-up"
            },
        ]
    },





]