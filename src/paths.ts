import { Elysia } from "elysia";

const app = new Elysia({ prefix: "/paths" })
	.get("/id/:id", ({ params: { id } }) => `ID: ${id}`)
	.get("/id/:id?", ({ params: { id } }) => `Optional ID: ${id}`)
	.get(
		"/id/:id/:name",
		({ params: { id, name } }) => `ID: ${id}, Name: ${name}`,
	)
	.get("/id/*", ({ params }) => `Wild: ${params["*"]}`);

export default app;
