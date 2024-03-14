import { apiInstance } from "~/shared/api";

const fetcher = (url: string) => {
  return apiInstance.get(url).then((res) => res.data);
};

export const createResource = (url: string) => {
  let status = "pending";
  let result: any;
  let suspender = fetcher(url).then(
    (data) => {
      status = "success";
      result = data;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};
