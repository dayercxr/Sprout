import { defineConfig } from "drizzle-kit";
import { DATABASE_URL } from "@/config";

export default defineConfig({
  out: "./src/migrations",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL
  }
});
