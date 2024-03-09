export type Admin = {
  id: number;
  user: {
    username: string;
  };
  name: string;
  surname: string;
  description: string;
  users_access: boolean;
  printers_access: boolean;
  orders_access: boolean;
  planted_seeds_access: boolean;
  marketplace_access: boolean;
  customer_support_access: boolean;
  logistics_access: boolean;
};

export const AdminTranslation = {
  id: "id",
  name: "Имя",
  surname: "Фамилия",
  username: "Логин",
  description: "Описание",
  users_access: "Доступ к пользователям",
  printers_access: "Доступ к принтерам",
  orders_access: "Доступ к заказам",
  planted_seeds_access: "Доступ к фермам",
  marketplace_access: "Доступ к маркетплейсу",
  customer_support_access: "Доступ к поддержке",
  logistics_access: "Доступ к логистике",
};
