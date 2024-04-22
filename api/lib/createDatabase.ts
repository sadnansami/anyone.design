import { turso } from "./tursoClient";

export const createDataBase = async (dbName: string) => {
	return await turso.databases.create(dbName, {
		group: "default",
		schema: "anyone-design"
	});
}
