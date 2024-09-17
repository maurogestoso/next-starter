import { createEnv } from "@t3-oss/env-nextjs";
import { type ZodError, z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
  },
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true, // error when env vars are empty

  // Called when the schema validation fails.
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors,
    );
    process.exit(1);
  },

  // Called when server variables are accessed on the client.
  onInvalidAccess: (variable: string) => {
    console.error(
      `❌ Attempted to access a server-side environment variable on '${variable}' the client.`,
    );
    process.exit(1);
  },
});
