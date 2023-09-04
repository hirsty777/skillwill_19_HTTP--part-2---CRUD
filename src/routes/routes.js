import MainPage from "../pages/MainPage"
import AddToDo from "../pages/AddToDo"
import EditToDo from "../pages/EditToDo"
import ErrorPage from "../pages/ErrorPage"

const router = [
    {
        element:<MainPage />,
        path:"/"
    },
    {
        element:<AddToDo />,
        path:"/add"
    },
    {
        element:<EditToDo />,
        path:"/edit/:toDoId"
    },
    {
        element:<ErrorPage/>,
        path:"*"
    }

]

export default router