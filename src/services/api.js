import axios from "axios";
import env from "../services/env";
const api = axios.create({
  baseURL: `http://${env.apiUrl}:${env.port}/bom-ar-backend` || 'http://localhost:3001/bom-ar-backend/',
});

export default api;