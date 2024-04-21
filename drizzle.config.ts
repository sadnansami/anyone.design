import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle/migrations",
  driver: "turso",
  dbCredentials: {
    url: "libsql://anyone-design-sadnansami.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTM2OTU5OTMsImlkIjoiYWY1MzEwODYtZWNhNy00OGM2LWEyZDctMWQyYWIwNDgzZmQ2In0.4_bXdUB7Reb6fboBKmy3Trs4TINwjZBs5sTaWVGZwE2YvOIy0nTz4SyOigq83RvOFgAXsKjm6dbboJi-QFcLBg",
  },
} satisfies Config;
