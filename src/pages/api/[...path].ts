import type { APIRoute } from "astro"
import app from "../../../api/server.ts"

const handler: APIRoute = ({ request }) => app.fetch(request)

export {
    handler as ALL
}