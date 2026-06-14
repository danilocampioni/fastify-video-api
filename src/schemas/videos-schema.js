export const getVideosSchema = {
  tags: ["Videos"],

  description: "Lista todos os vídeos cadastrados",

  querystring: {
    type: "object",

    properties: {
      search: {
        type: "string",
      },
    },
  },

  response: {
    200: {
      type: "array",

      items: {
        type: "object",

        properties: {
          id: {
            type: "string",
          },

          title: {
            type: "string",
          },

          description: {
            type: "string",
          },

          duration: {
            type: "number",
          },
        },
      },
    },
  },
};

export const createVideosSchema = {
  tags: ["Videos"],

  description: "Cria um novo vídeo",

  body: {
    type: "object",
    required: ["title", "description", "duration"],
    properties: {
      title: {
        type: "string",
      },
      description: {
        type: "string",
      },
      duration: {
        type: "number",
      },
    },
  },
  response: {
    201: {
      description: "Vídeo criado com sucesso",
      type: "null",
    },
  },
};

export const putVideosSchema = {
  tags: ["Videos"],

  description: "Atualiza um vídeo existente",

  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: {
        type: "string",
      },
    },
  },
  body: {
    type: "object",
    required: ["title", "description", "duration"],
    properties: {
      title: {
        type: "string",
      },
      description: {
        type: "string",
      },
      duration: {
        type: "number",
      },
    },
  },
  response: {
    204: {
      description: "Vídeo atualizado com sucesso",
      type: "null",
    },
  },
};

export const deleteVideosSchema = {
  tags: ["Videos"],
  description: "Remove um Vídeo",
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: {
        type: "string",
      },
    },
  },
  response: {
    204: {
      description: "Vídeo excluído com sucesso",
      type: "null",
    },
  },
};
