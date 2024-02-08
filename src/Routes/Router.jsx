import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Home/Home";
import SingleUser from "../component/UserCard/SingleUser";
import AddUserForm from "../component/AddUserForm/AddUserForm";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/form",
        element: <AddUserForm></AddUserForm>,
      },
      {
        path: "/singleUser/:id",
        element: <SingleUser></SingleUser>,
      },
    ],
  },
]);
