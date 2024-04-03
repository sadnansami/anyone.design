import knex from "knex";
import type { APIRoute } from "astro";
import Site from "./Site";

const userDBFile = (directory: string) => {
	return "sites/" + directory
}

const db = knex({
	client: "better-sqlite3", // or 'better-sqlite3'
	connection: {
		filename: userDBFile("project1/db.sqlite")
	},
	useNullAsDefault: true
})

const createTable = async (tableName: string) => {
	const tableExists = db.schema.hasTable(tableName)

	if (!tableExists) {
		await db.schema
		.createTable(tableName, (Table) => {
			Table.text("name")
		}).then(() => console.log("success"))
	}
		
	
}

export const GET: APIRoute = async ({params}: any) => {	

	await createTable("Orders")
	const site = new Site("project1")
	site.create()
	return new Response(
		JSON.stringify({
			body: "Hi"
		})
	)
}