import axios from "axios";

export const apiServices = axios.create({
  baseURL: 'http://127.0.0.1:4001',
  withCredentials: false,
  mode: 'cors'
});
