import doRequest from "../httpRequest/request";
import endpoints from "./endpoints";

export const getUser = async () => {
  return await doRequest({
    ...endpoints.getUser,
    body: "",
  });
};
