import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Root from "./routes/root";
import Users_List from './Components/Users';
import Login from './Components/Login';
import UserManagment from './Components/UserManagement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Some Error</h1>,
    children: [
      {
        path: "",
        element: <Users_List />,
      },
      
    ]
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "user/managment",
    element: <UserManagment />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

