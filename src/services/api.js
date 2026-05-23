import axios from "axios";

const API = axios.create({
  baseURL: "clinic-backend-production-7812.up.railway.app",
});

export default API;