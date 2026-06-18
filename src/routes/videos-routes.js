import { DatabasePostgres } from "../database/database-postgres.js";
import {
  createVideosSchema,
  deleteVideosSchema,
  getVideosSchema,
  updateVideosSchema,
} from "../schemas/videos-schema.js";

const database = new DatabasePostgres();

export async function videosRoutes(app) {
  // ==========================================  GET ====================================================

  app.get(
    "/videos",
    {
      schema: getVideosSchema,
    },
    async (request, reply) => {
      const { search } = request.query;

      const videos = await database.list(search);

      return reply.send(videos);
    },
  );

  // ==========================================  POST ====================================================

  app.post(
    "/videos",
    {
      schema: createVideosSchema,
    },

    async (request, reply) => {
      const { title, description, duration } = request.body;

      await database.create({
        title,
        description,
        duration,
      });

      return reply.status(201).send();
    },
  );

  // ==========================================  PUT / UPDATE ==============================================

  app.put(
    "/videos/:id",
    {
      schema: updateVideosSchema,
    },

    async (request, reply) => {
      const videoId = request.params.id;
      const { title, description, duration } = request.body;

      await database.update(videoId, {
        title,
        description,
        duration,
      });

      return reply.status(204).send();
    },
  );

  // ==========================================  DELETE ====================================================

  app.delete(
    "/videos/:id",
    {
      schema: deleteVideosSchema,
    },

    async (request, reply) => {
      const videoId = request.params.id;

      await database.delete(videoId);

      return reply.status(204).send();
    },
  );
}
