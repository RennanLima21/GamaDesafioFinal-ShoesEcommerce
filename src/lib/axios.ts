import axios from "axios";


// Base do local host pra ver tela
export const api = axios.create({
  baseURL: "http//localhost:3333"
})