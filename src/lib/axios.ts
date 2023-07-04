import axios from "axios";


// Base do local host pra ver tela
export const api = axios.create({
  baseURL:"https://gamashoes-production.up.railway.app"
  //baseURL: "https://gamashoes-production.up.railway.app"
});

