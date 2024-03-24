import * as API_ENDPOINTS from "../constants/API_ENDPOINTS";
import {
  AXIOS_CLIENT,
} from "@/utils/AXIOS_CLIENT";

const makeRequest = async (endpoint, data, method = "post") => {
  try {
    let response = await AXIOS_CLIENT[method](endpoint, data);

    let result = await response?.data?.response;

    if (result) {
      return result;
    }
  } catch (error) {
    console.log(endpoint.toUpperCase() + ": ", error.message);
    throw new Error(`${endpoint}: ${error.message}`);
  }
};

//AUTH APIs
export const LOGIN_API = (data) =>
  makeRequest(API_ENDPOINTS.LOGIN_ENDPOINT, data);


export const GET_COUNTRIES_API = () =>
makeRequest(API_ENDPOINTS.COUNTRY_LIST_ENDPOINT, null, "get");