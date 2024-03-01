import * as routes from "./routes";

export const permissions: { [key: string]: string } = {
  [routes.USERS_ROUTE]: "users_access",
  [routes.PRINTERS_ROUTE]: "printers_access",
  [routes.ORDERS_ROUTE]: "orders_access",
  [routes.PLANTED_SEEDS_ROUTE]: "planted_seeds_access",
  [routes.MARKETPLACE_ROUTE]: "marketplace_access",
  [routes.SUPPORT_MESSAGES_ROUTE]: "customer_support_access",
  [routes.LOGISTICS_ROUTE]: "logistics_access",
};
