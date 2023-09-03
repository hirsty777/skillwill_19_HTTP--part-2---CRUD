import MainPage from "../pages/MainPage"
import AddToDo from "../pages/AddToDo"
import EditToDo from "../pages/EditToDo"


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
    }
]

export default router