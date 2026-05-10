import { fastify } from 'fastify';
import { videosRoutes } from './routes/videos-routes.js';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';

const app = fastify();

app.register(swagger, {
    openapi: {
        info: {
            title: 'Fastify Video API',
            description: 'API desenvolvida com Node.js, Fastify e PostgreSQL',
            version: '1.0.0'
        }
    }
});

app.register(swaggerUI, {
    routePrefix: '/docs'
});

app.register(videosRoutes);

export { app }