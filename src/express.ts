import express from "express";

const app = express();

app.get("/", (_request, reply) => {
  reply.send("Hello, World!");
});

app.listen(8080);
