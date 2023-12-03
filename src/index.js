import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Root from "./routes/root";
import UsersList from './Components/Users';
import Login from './Components/Login';
import UserManagment from './Components/UserManagement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Some Error</h1>,
    children: [
      {
        path: "users",
        element: <UsersList />,
      }
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

