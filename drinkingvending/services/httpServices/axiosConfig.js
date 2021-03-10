import axios from "axios";

export const apiServices = axios.create({
  baseURL: 'http://127.0.0.1:4001',
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  },
  mode: 'cors'
});
