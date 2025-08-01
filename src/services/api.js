import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
});

/* Exemplo de API = https://api.github.com/repos/GaelAlvs/SiteHboMax */
