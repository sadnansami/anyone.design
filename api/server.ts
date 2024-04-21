import { Hono } from "hono"

const app = new Hono({ strict: false }).basePath("/api")
 
app.get("/db", c => {

  return c.text("Hello Hono!")
})

export default app