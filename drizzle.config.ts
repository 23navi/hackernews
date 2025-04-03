import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "server/db/schemas/*", // Path to our schema folder, we will divide our schema in different files and not keep everything in just on file like we do in prisma
  out: "drizzle", // For migrations (keeps the raw sql queries)
  dbCredentials: {
    url: process.env["DATABASE_URL"]!,
  },
});
