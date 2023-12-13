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
import * as Routes from './utils/consts';
import Dashboard from './Components/Dashboard';
import PostEdit from './Components/Posts/PostEdit'
import PostDetails from './Components/Posts/PostDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: Routes.DASHBOARD_ROUTE,
        element: <Dashboard />
      },
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
        path: Routes.POST_ROUTE,
        element: <PostEdit />
      },
      {
        path: Routes.POST_LIKES_ROUTE,
        element: <PostDetails />
      },
      {
        path: Routes.POST_COMMENTS_ROUTE,
        element: <PostDetails />
      },
      {
        path: Routes.POST_REPOSTS_ROUTE,
        element: <PostDetails />
      },
      {
        path: Routes.POST_VIEWS_ROUTE,
        element: <PostDetails />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

