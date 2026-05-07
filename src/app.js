import { fastify } from 'fastify';
import { videosRoutes } from './routes/videos-routes.js';

const app = fastify();
app.register(videosRoutes);

export { app }