import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from "./Components/App";
import DataTable from "./Components/Layout/DataTable";
import Login from './Components/Login';
import Logout from './Components/Logout';
import * as Routes from './utils/routes';
import Dashboard from './Components/Dashboard';
import DetailPage from './Components/Layout/DetailPage';
import ErrorPage from './Components/ErrorPage';

const details = [...Object.keys(Routes.detailRoutes)];
const dataTables = [...Object.keys(Routes.listRoutes)];

const children = [
  [Routes.DASHBOARD_ROUTE, <Dashboard />], 
  [Routes.LOGIN_ROUTE, <Login />], 
  [Routes.LOGOUT_ROUTE, <Logout />],
  ...details.map((route) => ([route, <DetailPage />])),
  ...dataTables.map((route) => ([route, <DataTable />]))
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      ...children.map(([route, element]) => ({
        path: route,
        element: element
      }))
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

