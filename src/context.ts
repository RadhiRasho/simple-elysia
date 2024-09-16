import { Elysia } from "elysia";

const app = new Elysia({ prefix: "/context" }).get("/", (req, res) => {
	res.send(req.context);
});

export default app;