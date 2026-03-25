import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/estimates/",
});

export const createEstimate = (data) => API.post("create/", data);
export const getEstimates = () => API.get("");
export const getEstimateDetail = (id) => API.get(`${id}/`);
