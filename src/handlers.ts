import { Elysia } from "elysia";

const app = new Elysia({ prefix: "/handlers" })
	//* the function `() => "hello world"` is the handler for the route
	.get("/", "hello world")
	.get("/video", Bun.file("public/flamingo.mp4"))
	.get("/error", ({ error }) => error(418, "Kirifuji Nagisa"))
	.get("/set", ({ set, cookie }) => {
		set.status = Math.random() > 0.5 ? 418 : "Accepted";
		set.headers = {
			"content-type": "text/plain",
		};

		// OR

		set.headers["x-powered-by"] = "Elysia";

		return "Hello World";
	})
	.get("/rick", ({ redirect }) => redirect("https://youtu.be/dQw4w9WgXcQ", 308))
	//* teh return value of 'hi' is the response, it's equivalent to `new Response('hi')`
	.get("/shortres", "short hi")
	.get("/res", () => "normal Hiiii")
	.get("/response", () => new Response("Long ass hiiiiiiiiii"));

export default app;