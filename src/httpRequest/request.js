import axios from "axios";

const doRequest = async ({ method, uri, body, props }) => {
  try {
    const response = await axios[method](uri, { ...body, ...props });
    return response;
  } catch (err) {
    return err;
  }
};

export default doRequest;
