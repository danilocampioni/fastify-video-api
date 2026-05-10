import { DatabasePostgres } from '../database/database-postgres.js';

const database = new DatabasePostgres();

export async function videosRoutes(app) {

    // ==========================================  GET ====================================================

app.get('/videos', {
    schema: {
        tags: ['Videos'],
        description: 'Lista todos os vídeos cadastrados',
        querystring: {
            type: 'object',
            properties: {
                search: {
                    type: 'string'
                }
            }
        },
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string'
                        },
                        title: {
                            type: 'string'
                        },
                        description: {
                            type: 'string'
                        },
                        duration: {
                            type: 'number'
                        },
                    }

                }
            }
        } 
    }
}
    , async (request, reply) => {
    const { search } = request.query;

    const videos = await database.list(search);

    return reply.send(videos);
})

// ==========================================  POST ====================================================

app.post('/videos', async (request, reply) => {

    const {title, description, duration} = request.body;

   await database.create({
        title,
        description,
        duration
    })

    return reply.status(201).send();
})

// ==========================================  PUT / UPDATE ==============================================

app.put('/videos/:id', async(request, reply) => {

    const videoId = request.params.id;
    const {title, description, duration} = request.body;

    await database.update(videoId, {
        title,
        description,
        duration
    })
    console.log (videoId);

    return reply.status(204).send();
    
})

// ==========================================  DELETE ====================================================

app.delete('/videos/:id', async (request, reply) => {

    const videoId = request.params.id;

    await database.delete(videoId);

    return reply.status(204).send();
})
    
}