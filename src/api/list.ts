import http from "utils/http";

export const productList = {
  getUser: (params?: string) => http.get(`user?${params ? params : ""}`),
  getList: (params?: string) => http.get(`list?${params ? params : ""}`),
};
