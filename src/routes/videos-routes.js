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
                description: 'Lista de vídeos retornada com sucesso',
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

app.post('/videos', {

    schema: {
        tags: ['Videos'],
        description: 'Cria um novo vídeo',
        body: {
            type: 'object',
            required: ['title','description','duration'],
            properties: {   
                title: {
                    type: 'string',
                },                
                description: {
                    type: 'string',
                },
                duration: {
                    type: 'number',
                }
            }
        },
        response: {
            201: {
                description: 'Vídeo criado com sucesso',
                type: 'null',
            }
        }
    }
}
    
    , async (request, reply) => {

    const {title, description, duration} = request.body;

   await database.create({
        title,
        description,
        duration
    })

    return reply.status(201).send();
})

// ==========================================  PUT / UPDATE ==============================================

app.put('/videos/:id', {
        schema: {
            tags: ['Videos'],
            description: 'Atualiza um vídeo existente',
        params: {
            type: 'object',
            required: ['id'],
            properties: {
                id: {
                    type: 'string'
                }
            }
        },
        body: {
            type: 'object',
            required: ['title', 'description', 'duration'],
            properties: {
                title: {
                    type: 'string'
                },
                description: {
                    type: 'string'
                },
                duration: {
                    type: 'number'
                }
            }
        },
        response: {
            204: {
                description: 'Vídeo atualizado com sucesso',
                type: 'null'
            }
        }
    }
        },
            
    
    async(request, reply) => {

        const videoId = request.params.id;
        const {title, description, duration} = request.body;

        await database.update(videoId, {
            title,
            description,
            duration
        })

        return reply.status(204).send();
        
    })

// ==========================================  DELETE ====================================================

app.delete('/videos/:id', {

    schema: {
        tags: ['Videos'],
        description: 'Remove um Vídeo',
        params: {
            type: 'object',
            required: ['id'],
            properties: {
                id: {
                    type: 'string',
                }
            }
        },
        response: {
            204: {
                description: 'Vídeo excluído com sucesso',
                type: 'null',
            }
        }
    }


}, async (request, reply) => {

    const videoId = request.params.id;

    await database.delete(videoId);

    return reply.status(204).send();
})
    
}