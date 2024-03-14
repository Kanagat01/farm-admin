export const NotFound = () => {
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

export default NotFound;
