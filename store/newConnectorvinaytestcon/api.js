import axios from "axios";
import { NEW_CONNECTOR_VINAY_TESTCON_USERNAME, NEW_CONNECTOR_VINAY_TESTCON_PASSWORD } from "react-native-dotenv";
const newConnectorvinaytestcon = axios.create({
  baseURL: "https://test.com",
  auth: {
    username: NEW_CONNECTOR_VINAY_TESTCON_USERNAME,
    password: NEW_CONNECTOR_VINAY_TESTCON_PASSWORD
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
export const apiService = {};