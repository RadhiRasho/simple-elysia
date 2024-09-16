import { staticPlugin } from "@elysiajs/static";
import { swagger } from "@elysiajs/swagger";
import { Elysia, error } from "elysia";
import atGlance from "./at-glance";
import paths from "./paths";
import routes from "./routes";
import handlers from "./handlers";
import context from "./context";

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
	});

export default app;
