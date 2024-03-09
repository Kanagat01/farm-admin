import { User } from "~/entities/user";

export type ModelLevel = {
  id: number;
  image: string;
  duration: number;
  level_index: number;
  name: string;
  description: string;
};

export const ModelLevelTranslation = {
  id: "id",
  image: "Изображение",
  duration: "Длительность",
  level_index: "Индекс уровня",
  name: "Название",
  description: "Описание",
};

export type Model = {
  id: 1;
  image: string;
  first_level_animation: string;
  category: string;
  name: string;
  file: string;
  file_weight: string;
  description: string;
  model_size: string;
  height: string;
  levels: ModelLevel[];
};

export const ModelTranslation = {
  id: "id",
  image: "Изображение",
  first_level_animation: "Анимация 1-го уровня",
  category: "Категория",
  name: "Название",
  file: "Файл",
  file_weight: "Вес файла",
  description: "Описание",
  model_size: "Размер",
  height: "Высота",
  levels: "Уровни",
};

export type Printer = {
  printing_model_id: number;
  model: Model;
  created_date: string;
  is_all_levels_done: boolean;
  owner: null | User;
};

export const PrinterHeaders = [
  "ID модели на печати",
  "Модель",
  "Дата создания",
  "Готовы все уровни",
  "Владелец",
  "Напечатано",
];
