import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from "./Components/App";
import UsersList from './Components/Lists/UsersList';
import AdminsList from './Components/Lists/Admins';
import Login from './Components/Login';
import Logout from './Components/Logout';
import UserInfo from './Components/Details/UserInfo';
import * as Routes from './utils/consts';
import Dashboard from './Components/Dashboard';
import PostsList from './Components/Lists/PostsList'
import PostInfo from './Components/Details/PostInfo';
import OrdersList from './Components/Lists/OrdersList';
import ModelsList from './Components/Lists/ModelsList';
import ModelInfo from './Components/Details/ModelInfo';
import PostComments from './Components/Lists/PostComments';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: Routes.LOGOUT_ROUTE,
        element: <Logout />
      },
      {
        path: Routes.ADMINS_ROUTE,
        element: <AdminsList />
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
        path: Routes.POSTS_ROUTE,
        element: <PostsList />
      },
      {
        path: Routes.POST_ROUTE,
        element: <PostInfo />
      },
      {
        path: Routes.POST_COMMENTS_ROUTE,
        element: <PostComments />
      },
      {
        path: Routes.ORDERS_ROUTE,
        element: <OrdersList />
      },
      {
        path: Routes.MODELS_ROUTE,
        element: <ModelsList />
      }, 
      {
        path: Routes.MODEL_ROUTE,
        element: <ModelInfo />
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

