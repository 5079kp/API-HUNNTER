import axios from "axios"

const API_KEY = "c124ac33f841781931fac046a976a430"
const BASE_URL = "https://api.themoviedb.org/3"

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
})
