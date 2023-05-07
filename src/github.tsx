import axios from "axios";

export const git = axios.create({ baseURL: "https://api.github.com", timeout: 10000 });
