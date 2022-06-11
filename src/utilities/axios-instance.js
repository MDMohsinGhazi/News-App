import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://flutternews.hopto.org/",
});

export default AxiosInstance;
