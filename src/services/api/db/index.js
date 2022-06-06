import axios from "axios";

const db = axios.create({
  baseURL: "http://localhost:3003",
});

export default db;
