import { Pool } from "pg";

let globalPool;

if (!globalPool) {
  globalPool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT):5432,
    host: process.env.DB_HOST,
  })
}

export const pool = globalPool;
