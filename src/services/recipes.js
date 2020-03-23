import http from "./httpService";
import { apiUrl } from "../config.json";

export function getUrl() {
  return http.get(apiUrl + "/recipes");
}
