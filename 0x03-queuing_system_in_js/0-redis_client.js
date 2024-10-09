import { createClient } from 'redis';

const client = await createClient()
  .on('error', err => console.log('Redis Client Error', err))
  .on('conect', () => console.log('Redis client connected to the server'));