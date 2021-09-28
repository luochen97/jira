import axios from "axios";
let baseURL = process.env.REACT_APP_API_URL;
if (process.env.NODE_ENV !== "development") {
  /* 根据域名判断测试环境与生产环境引用的后端接口 */
}

const server = axios.create({
  baseURL,
  timeout: 1000,
  withCredentials: true,
});
// server.interceptors.request.use(function(request) {
//   console.log(request)
//   return request
// })
server.interceptors.response.use(function (response) {
  if (response.status === 200) {
    return response.data;
  } else {
    alert("操作失败");
    return;
  }
});
export default server;
