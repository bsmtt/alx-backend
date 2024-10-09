import { createClient } from 'redis';

const subscriber = createClient();

subscriber.on('error', (error) => {
  console.log(`Redis client not connected to server: ${error.message}`);
});

subscriber.on('connect', () => {
  console.log('Redis client connected to the server');
});

subscriber.on('message', (channel, message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    subscriber.unsubscribe(channel);
    subscriber.quit();
  }
});

subscriber.subscribe('holberton school channel');