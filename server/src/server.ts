import fastify from "fastify";

const app = fastify();

app.listen({
  port: 3001
}).then(() => {
  console.log('👌 HTTP server running on http://localhost:3001');
});