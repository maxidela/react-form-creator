import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-Type": "application/json",
  },
});

export function getForms() {
  return axiosInstance.get("forms");
}

export function deleteForm(id: number) {
  return axiosInstance.delete(`forms/${id}`);
}
