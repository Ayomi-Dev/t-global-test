#Next.js Todo App with Chakra UI

This is a Task Management App built with Next.js (App Router) and Chakra UI. The project demonstrates modern React practices, persistent storage, and an accessible UI framework to create a smooth task management experience.

 #Features:

Create Task – Add new tasks with details like name, description, assignee, priority, and status.

Complete Task – Mark tasks as complete, updating their status and including them in the complete section.

Task tabs view and status – Navigate tasks by changing views from Table to card version ( To do, In Progress, Completed).

Persistent Storage – Uses localStorage so tasks remain saved even after refreshing the page.

Responsive UI – Powered by Chakra UI’s styled components for consistency and accessibility.

Dynamic State Management  – Real-time updates across components with React ContextAPI


#Tech Stack

Next.js 15+ (App Router) – React framework with SSR/SSG support.

Chakra UI v2 – Component library for styling and accessibility.

TypeScript – Strong typing for safer and maintainable code.

LocalStorage – Persist tasks on the client side.


📂 Project Structure
src/
 ├─ app/              # Next.js App Router pages & layouts
 │   ├─ layout.tsx    # Root layout with ChakraProvider
 │   ├─ page.tsx      # main component (task list)
 │   └─ ...
 ├─ components/       # Reusable UI components (task form, menu, etc.)
 ├─ Context/            # Global state management (tasks, completeTask)

 ├─ types/            # TypeScript interfaces & enums
 └─ datas/            # list for different components

#Development Notes

The app uses ChakraProvider at the root (layout.tsx).

localStorage is integrated with hydration-safe logic (useEffect) to avoid SSR/CSR mismatches.



