import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Root from "./routes/root";
import UsersList from './Components/Users/UsersList';
import CulturesList from './Components/Cultures/CulturesList';
import CultureInfo from './Components/Cultures/CultureInfo';
import AdminsList from './Components/Admins';
import Login from './Components/Login';
import UserInfo from './Components/Users/UserInfo';
import * as Routes from './utils/consts';
import Dashboard from './Components/Dashboard';
import PostEdit from './Components/Posts/PostEdit'
import PostDetails from './Components/Posts/PostDetails';
import UserActions from './Components/Users/UserActions';
import Order from './Components/Orders/Order';
import ModelsList from './Components/Models/ModelsList';
import ModelInfo from './Components/Models/ModelInfo';
import ConfigurationForm from './Components/Models/Configuration';

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
        path: Routes.ADMINS_ROUTE,
        element: <AdminsList />
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
      {
        path: Routes.USER_ACTIONS,
        element: <UserActions />
      },
      {
        path: Routes.ORDERS_ROUTE,
        element: <Order />
      },
      {
        path: Routes.CULTURES_ROUTE,
        element: <CulturesList />
      }, {
        path: Routes.CULTURE_ROUTE,
        element: <CultureInfo />
      },
      {
        path: Routes.MODELS_ROUTE,
        element: <ModelsList />
      }, 
      {
        path: Routes.MODEL_ROUTE,
        element: <ModelInfo />
      },
      {
        path: Routes.CONFIGURATION_ROUTE,
        element: <ConfigurationForm />
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

