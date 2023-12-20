import axios, { AxiosResponse } from "axios";
import { error } from "console";
let token;
if (typeof window !== "undefined") {
  if (window.localStorage) {
    token = localStorage.getItem("idToken");
  } else {
    console.error("localStorage is not available in this environment.");
  }
} else {
  console.error("This script should be executed in a browser environment.");
}
const makeRequest = axios.create({
  baseURL: "https://lunnex-backend.onrender.com", //http://localhost:3000
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

makeRequest.interceptors.response.use(
  (response:any) => { 
    return response;
  },
  (error: { response: { data: { message: any; }; }; }) => { 
    const errorMessage = error?.response?.data?.message?.[0] ?? error?.response?.data?.message ?? error;

    throw new Error(errorMessage)
  }
);

export default makeRequest;
