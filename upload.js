import GhostAdminAPI from "@tryghost/admin-api";
import dotenv from "dotenv";

// Load .env file for local development
dotenv.config();

const api = new GhostAdminAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_ADMIN_API_KEY,
  version: process.env.GHOST_VERSION,
});

const result = await api.themes.upload({
  file: "./dist/theme.zip",
});

console.log(result);
