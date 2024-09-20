import { Elysia } from "elysia";

export const context = new Elysia({ prefix: "/context" })
	.get("/", ({ store }) => {
		console.log(store);
	})
	.ws("/realtime", {
		message(ws, message) {
			ws.send(`Got: ${message}`);
		},
	});
