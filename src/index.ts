import { swagger } from "@elysiajs/swagger";
import { Elysia, error } from "elysia";
import { atGlance } from "./at-glance";
import { context } from "./context";
import { handlers } from "./handlers";
import { paths } from "./paths";
import { routes } from "./routes";

import { staticPlugin } from "@elysiajs/static";

const app = new Elysia()
	.use(staticPlugin())
	.use(swagger())
	.get("/", () => "Hello Elysia")
	.use(atGlance)
	.use(routes)
	.use(paths)
	.use(handlers)
	.use(context)
	.onError(({ code }) => {
		if (code === "NOT_FOUND") return Bun.file("public/404.html");

		return error("Internal Server Error", 500);
	})
	.ws("/ws", {
		open(ws) {
			ws.send("hello");
		},
	})
	.listen(3000);

console.log(`Listening on ${app.server?.url}`);
