import { createCors } from 'itty-cors';

const { preflight, corsify } = createCors({
  origins: ['*'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  headers: {
    'Access-Control-Allow-Credentials': 'true',
  },
});

export const onRequest: PagesFunction = async (context) => {
  const { request, next } = context;
  
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return preflight(request);
  }
  
  // Add CORS headers to all responses
  const response = await next();
  return corsify(response);
};
