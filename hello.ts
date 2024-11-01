import { createApp, createRouter, getRouterParam, getRouterParams } from "h3";

export const app = createApp();

const router = createRouter()
  .get("/", () => {
    return { statusCode: 200, message: "Hello" };
  })
  .get("/:name", (event: any) => {
    const name = getRouterParam(event, "name");
    return `Hello ${name}`;
  })
  .get("/:name/:age", (event: any) => {
    const params = getRouterParams(event);

    return `Hello ${params.name}, you are ${params.age} years old`;
  });

app.use(router);
