import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Root from "./routes/root";
import UsersList from './Components/Users/Users';
import Login from './Components/Login';
import UserInfo from './Components/Users/UserInfo';
import BanUser from './Components/Users/BanUser';
import EditUser from './Components/Users/EditUser';
import * as Routes from './utils/consts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: Routes.LOGIN_ROUTE,
        element: <Login />
      },
      {
        path: Routes.USERS_ROUTE,
        element: <UsersList />
      },
      {
        path: Routes.USER_ROUTE,
        element: <UserInfo />
      },
      {
        path: Routes.BAN_ROUTE,
        element: <BanUser />
      },
      {
        path: Routes.EDIT_ROUTE,
        element: <EditUser />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

