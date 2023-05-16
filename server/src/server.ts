import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const app = fastify();
const prisma = new PrismaClient();

app.get('/users', async () => {
  const users = prisma.user.findMany();

  return users;
});

app
  .listen({
    port: 3001
  })
  .then(() => {
    console.log('👌 HTTP server running on http://localhost:3001');
  });
