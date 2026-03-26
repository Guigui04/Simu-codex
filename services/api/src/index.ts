import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/api/health', () => ({ status: 'ok' }))
  .get('/api/simulations', () => [])
  .post('/api/simulations', ({ body }) => ({ id: crypto.randomUUID(), ...body }))
  .listen(3000);

console.log(`Genèse API démarrée sur ${app.server?.hostname}:${app.server?.port}`);
