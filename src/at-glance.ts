import { Elysia } from "elysia";

export const atGlance = new Elysia({ prefix: "/at-glance" })
	.get("/", () => "Hello Elysia")
	.get("/user/:id", ({ params: { id } }) => id)
	.post("/form", ({ body }) => body);
