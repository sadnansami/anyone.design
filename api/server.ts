import { Hono } from "hono"
import { app as sites } from "./routes/sites"

const app = new Hono({ strict: false }).basePath("/api")
 
app.route("/:site", sites)
app.get("/db", c => {

  return c.text("Hello Hono!")
})

export default app