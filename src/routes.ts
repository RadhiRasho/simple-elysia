import { Elysia } from "elysia";

export const routes = new Elysia({ prefix: "/routes" }) // Prefix for all routes
	.get("/", () => "hello") // GET request
	.get("/hi", () => "hi") // GET request
	.post("/hi-post", ({ body }) => body) // POST request with body
	// Custom route with custom method Doesn't show in swagger because it's not a standard method
	.route("M-SEARCH", "/m-search", () => "Connected");
// .all("/", "this is all encompassing") // All requests, GET, POST, PUT, DELETE, etc
/**
 *? This is how you can test the routes programatically, no need for Postman or Insomnia
 ** const res = await app.handle(new Request("https://localhost:3000/routes"));
 ** console.log(res); */
