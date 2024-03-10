import { dateToString } from "~/shared/lib";

export type User = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  coin_count: number;
  subscription_type: "ST" | "TE" | "PR";
  xp: number;
  joined_date: string;
  is_banned: boolean;
};

export const UserHeaders = {
  id: "ID",
  name: "Имя",
  email: "Email",
  phone_number: "Номер телефона",
  coin_count: "Количество монет",
  subscription_type: "Тип подписки",
  xp: "Количество опыта",
  joined_date: "Дата регистрации",
  activity: "Активность",
  is_banned: "Статус",
};

export type UserActivityProps = {
  user_id: number;
};

export type UserActivity = {
  action: string;
  action_type: string;
  action_description: string;
  action_datetime: string;
};

export const UserActivityHeaders = {
  action: "Действие",
  action_type: "Тип действия",
  action_description: "Описание",
  action_datetime: "Время",
};

export const getUserActivityData = (data: UserActivity[]) => {
  return data.map((activity: UserActivity) =>
    Object.keys(UserActivityHeaders).map((key) => {
      if (key === "action_datetime") {
        return dateToString(activity[key]);
      } else if (key === "action_type") {
        let actionTypes = {
          printer: "3D",
          farm: "Ферма",
          common: "Общие",
          social_media: "Социальная сеть",
          marketplace: "Маркетплейс",
        };
        //@ts-ignore
        return actionTypes[activity[key]];
      }
      //@ts-ignore
      return activity[key];
    })
  );
};
