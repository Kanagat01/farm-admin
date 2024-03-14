import { lazy, ComponentType, useContext, Suspense } from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { routes, permissions } from "~/shared/router";
import { Footer, Header, NotAccessed, Sidebar } from "~/widgets";
import { AuthContext } from "~/app/providers";
import { Preloader } from "~/shared/ui";
import SuccessPayment from "./success_payment";

const NotFound = () => {
  type ErrorWithStatus = Error & {
    status?: number;
    statusText?: string;
    data?: string;
  };
  const error = new Error() as ErrorWithStatus;
  error.status = 404;
  error.statusText = "Страница не найдена";
  error.data =
    "Возможно, страница, которую вы ищете, была удалена, ее название изменилось или она временно недоступна.";

  throw error;
};

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={routes.LOGIN_ROUTE} state={{ from: location }} replace />
  );
};

function withLayout(currentRoute: string, ComponentName: ComponentType) {
  let hasAccess = true;
  if (currentRoute in permissions) {
    hasAccess = localStorage.getItem(permissions[currentRoute]) === "true";
  }
  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div
          className="d-flex flex-column flex-grow-1"
          style={{ height: "90vh" }}
        >
          <div className="main">
            <Suspense fallback={<Preloader />}>
              {hasAccess ? <ComponentName /> : <NotAccessed />}
            </Suspense>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

const MainPage = lazy(() => import("./main"));
const UsersPage = lazy(() => import("./users"));
const LoginPage = lazy(() => import("./login"));
const PlantedSeeds = lazy(() => import("./planted_seeds"));
const Printers = lazy(() => import("./printers"));
const Marketplace = lazy(() => import("./marketplace"));
const Orders = lazy(() => import("./orders"));
const Logistics = lazy(() => import("./logistics"));
const SupportMessages = lazy(() => import("./support_messages"));

export const Routing = () => {
  const routeElements: Array<[string, ComponentType]> = [
    ["/", MainPage],
    [routes.USERS_ROUTE, UsersPage],
    [routes.PLANTED_SEEDS_ROUTE, PlantedSeeds],
    [routes.PRINTERS_ROUTE, Printers],
    [routes.MARKETPLACE_ROUTE, Marketplace],
    [routes.ORDERS_ROUTE, Orders],
    [routes.LOGISTICS_ROUTE, Logistics],
    [routes.SUPPORT_MESSAGES_ROUTE, SupportMessages],
  ];
  return (
    <Routes>
      <Route
        path={routes.LOGIN_ROUTE}
        element={withLayout(routes.LOGIN_ROUTE, LoginPage)}
      />
      <Route path={routes.SUCCESS_PAYMENT_ROUTE} element={<SuccessPayment />} />
      <Route element={<PrivateRoute />}>
        {routeElements.map(([route, element], index) => (
          <Route
            key={index}
            path={route}
            element={withLayout(route, element)}
          />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
