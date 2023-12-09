import axios from "axios";
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
export const makeRequest = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
