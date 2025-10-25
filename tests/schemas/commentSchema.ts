export const commentSchema = {
  type: 'object',
  items: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      post_id: { type: 'number' },
      name: { type: 'string' },
      email: { type: 'string'},
      body: { type: 'string' }
    },
    required: ['id', 'post_id', 'name', 'email', 'body'],
    additionalProperties: false
  }
};
