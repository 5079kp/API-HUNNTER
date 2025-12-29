import axios from "axios";

const studentApi = axios.create({
  baseURL: "http://localhost:5000",
});

export default studentApi;
