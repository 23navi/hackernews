import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { drizzle } from "drizzle-orm/postgres-js";

import postgres from "postgres";
import { z } from "zod";
import { sessionTable, userTable } from "./db/schemas/auth";


const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
});

const processEnv = EnvSchema.parse(process.env);

const queryClient = postgres(processEnv.DATABASE_URL);
export const db = drizzle(queryClient, {
  schema: {
    user: userTable,
    session: sessionTable
  }
});

export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable)


// # For testing 

// const result = await db.execute("select 1");
// console.log(result);
// > bun run server/adapter.ts (bun has native support for ts so we can directly run .ts files)
