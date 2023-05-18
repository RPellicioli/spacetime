import fastify from 'fastify';
import cors from '@fastify/cors';
import { userRoutes } from './routes/users';
import { memoriesRoutes } from './routes/memories';

const app = fastify();

app.register(cors, {
  origin: true
});
app.register(userRoutes, memoriesRoutes);

app
  .listen({
    port: 3001
  })
  .then(() => {
    console.log('👌 HTTP server running on http://localhost:3001');
  });
