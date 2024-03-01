export type User = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  coin_count: number;
  subscription_type: "ST" | "TE" | "PR";
  level_of_achievments: number;
  level_in_app: number;
  registration_date: string;
  activity: Array<any>;
  is_banned: boolean;
};

export const getUserHeaders = () => {
  return [
    ["id", "ID"],
    ["name", "Имя"],
    ["email", "Email"],
    ["phone_number", "Номер телефона"],
    ["coin_count", "Количество монет"],
    ["subscription_type", "Тип подписки"],
    ["level_of_achievments", "Уровень достижений"],
    ["level_in_app", "Уровень приложении"],
    ["registration_date", "Дата регистрации"],
    ["activity", "Активность"],
    ["is_banned", "Статус"],
  ];
};

export type UserActivityProps = {
  user_id: number;
  activity: Array<any>;
};
