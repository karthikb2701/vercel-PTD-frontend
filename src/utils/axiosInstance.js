import axios from "axios"

const BASE_URL = "https://vercel-ptd-backend-fzm6.vercel.app/api"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

export default axiosInstance
