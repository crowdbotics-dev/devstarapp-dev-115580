import axios from "axios";
const newConnectortester = axios.create({
  baseURL: "https://test.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
export const apiService = {};