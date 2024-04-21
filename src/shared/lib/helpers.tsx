export const dateToString = (dateStr: string) => {
  let date = new Date(dateStr);

  let day = ("0" + date.getUTCDate()).slice(-2);
  let month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
  let year = date.getUTCFullYear();
  let hours = ("0" + date.getUTCHours()).slice(-2);
  let minutes = ("0" + date.getUTCMinutes()).slice(-2);

  let formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
  return formattedDate;
};
