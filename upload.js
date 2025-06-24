import GhostAdminAPI from "@tryghost/admin-api";
import { key, url, version } from "./env.js";

const api = new GhostAdminAPI({ url, key, version });

const result = await api.themes.upload({
  file: "./dist/theme.zip",
});

console.log(result);
