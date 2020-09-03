import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:3001/",
});

export function getForms() {
  return axiosInstance.get("forms");
}

export function deleteForm(id: number) {
  return axiosInstance.delete(`forms/${id}`);
}
