import "dotenv/config"
import { createClient } from "@tursodatabase/api";

export const turso = createClient({
  org: process.env.TURSO_ORG_SLUG!,
  token: process.env.TURSO_PLATFORM_API_TOKEN!,
});