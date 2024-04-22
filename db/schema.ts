import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid"

const currentDate = new Date()

export const sites = sqliteTable("sites", {
  siteName: text("site_name").primaryKey(),
  siteDatabaseURL: text("site_database_url").notNull(),
  siteAuthToken: text("site_auth_token").notNull(),
  createdAt: text("created_at").default(sql`(CURRENT_DATE)`).notNull(),
  updatedAt: text("updated_at").$onUpdateFn(() => sql`(CURRENT_DATE)`)
});

export const pages = sqliteTable("pages", {
  pageID: text("page_id").primaryKey().$defaultFn(() => nanoid()),
  pageName: text("page_name").unique().notNull(),
  directory: text("directory"),
  content: text("content").notNull(),
  createdAt: text("created_at").default(sql`(CURRENT_DATE)`).notNull(),
  updatedAt: text("updated_at").$onUpdateFn(() => sql`(CURRENT_DATE)`)
});

export const functions = sqliteTable("functions", {
  functionName: text("function_name").primaryKey(),
  function: text("function").notNull()
});
