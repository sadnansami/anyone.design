import { Hono } from "hono"
import { app as site } from "./routes/site"
import { eq } from "drizzle-orm"
import { db } from "db/config"
import { pages } from "db/schema"

const app = new Hono({ strict: false }).basePath("/api")
 
app.get("/fetch/:pageName", async c => {
	const { pageName } = c.req.param()

	const result = (
		await db
			.select()
			.from(pages)
			.where(eq(pages.pageName, pageName))
	)[0].content

	return c.html(result)
})

app.route("/:site", site)


export default app