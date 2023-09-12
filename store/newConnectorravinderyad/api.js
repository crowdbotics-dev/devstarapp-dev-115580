import axios from "axios";
import { NEW_CONNECTOR_RAVINDER_YAD_USERNAME, NEW_CONNECTOR_RAVINDER_YAD_PASSWORD } from "react-native-dotenv";
const newConnectorravinderyad = axios.create({
  baseURL: "https://testing.com",
  auth: {
    username: NEW_CONNECTOR_RAVINDER_YAD_USERNAME,
    password: NEW_CONNECTOR_RAVINDER_YAD_PASSWORD
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
export const apiService = {};