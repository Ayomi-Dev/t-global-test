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
        icon: <BsGrid size={20} />,
        path: '/'
    },
    {
        label: "MKVanBinnen",
        icon: <HiOutlineDocumentText size={20} />,
        path: '/profile'
    },
    {
        label: "Document Management",
        icon: <BsFolder size={20} />,
        path: '/manage'
    },
    {
        label: "Patient Information",
        icon: <HiOutlineUserGroup size={20} />,
        path: '/info'
    },
    {
        label: "Agenda",
        icon: <BiNotepad size={20} />,
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
        icon: <BiPhone size={20} />,
        path: "/phone"
    },
    {
        label: "My todo protocols",
        icon: <BiNote size={20} />,
        path: "/protocols"
    },
    {
        label: "Notifications",
        icon: <BiNotification size={20} />,
        path: "/notifications"
    },
    {
        label: "Knowledge Base",
        icon: <BiMenu size={20} />,
        path: "/base"
    },
    {
        label: "Super Admin",
        icon: <BiMessageEdit size={20} />,
        path: "/super-admin"
    },
    {
        label: "Admin",
        icon: <BiMessageEdit size={20} />,
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