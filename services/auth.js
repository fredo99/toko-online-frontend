import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "v1";

export async function setLogin(data) {
  const URL = "auth/login";

  const response = await axios
    .post(`${ROOT_API}/${API_VERSION}/${URL}`, data)
    .catch((err) => {
      console.log(err);
    });

  return response.data;
}
