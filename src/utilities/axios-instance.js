import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URI,
});

export default AxiosInstance;
// https://flutternews.hopto.org/
