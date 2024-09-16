import { Elysia } from "elysia";

const app = new Elysia({ prefix: "/at-glance" })
	.get("/", () => "Hello Elysia")
	.get("/user/:id", ({ params: { id } }) => id)
	.post("/form", ({ body }) => body);

export default app;
