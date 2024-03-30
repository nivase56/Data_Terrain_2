import * as API_ENDPOINTS from "../constants/API_ENDPOINTS";
import { AXIOS_CLIENT } from "@/utils/AXIOS_CLIENT";

const makeRequest = async (endpoint, data, method = "post") => {
  try {
    let response = await AXIOS_CLIENT[method](endpoint, data);

    let result = await response?.data;

    if (result) {
      return result;
    }
  } catch (error) {
    console.log(endpoint.toUpperCase() + ": ", error.message);
    throw new Error(`${endpoint}: ${error.message}`);
  }
};

//AUTH APIs

export const GET_USER_HIERACHY_API = () =>
  makeRequest(API_ENDPOINTS.USER_HIERACHY, null, "get");

export const GET_CANDIDATE_STATUS_API = () =>
  makeRequest(API_ENDPOINTS.CANDIDATE_STATUS_ENDPOINT, null, "get");

export const GET_INTERVIEW_AND_HIRED_DETAILS_API = () =>
  makeRequest(API_ENDPOINTS.INTERVIEW_AND_HIRED_DETAILS_ENDPOINT, null, "get");

export const GET_POSTED_JOB_LISTS_API = () =>
  makeRequest(API_ENDPOINTS.POST_JOB_LIST_ENDPOINT, null, "get");

export const GET_TODAY_MEETING_DETAILS_API = () =>
  makeRequest(API_ENDPOINTS.TODAY_MEETING_DETAILS_ENDPOINT, null, "get");

export const GET_ACTIVITIES_API = () =>
  makeRequest(API_ENDPOINTS.ACTIVITIES_ENDPOINT, null, "get");

export const GET_UPCOMINGS_API = () =>
  makeRequest(API_ENDPOINTS.UPCOMINGS_ENDPOINT, null, "get");

export const GET_HIRED_API = () =>
  makeRequest(API_ENDPOINTS.HIRED_ENDPOINT, null, "get");

export const LOGIN_API = (data) =>
  makeRequest(API_ENDPOINTS.LOGIN_ENDPOINT, data);

export const GET_COUNTRIES_API = () =>
  makeRequest(API_ENDPOINTS.COUNTRY_LIST_ENDPOINT, null, "get");
