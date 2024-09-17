import createJiti from "jiti";
import { fileURLToPath } from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));

/**
 * ℹ️ Why this?
 * This validates the env schema at build-time. It will throw an error if the schema is not met before the app even starts.
 * See: https://env.t3.gg/docs/nextjs#validate-schema-on-build-(recommended)
 */
jiti("./src/env/server.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
