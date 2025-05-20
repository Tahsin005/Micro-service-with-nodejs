import http from 'http';
import app from './app.js';

const server = http.createServer(app);

server.listen(3003, () => {
    console.log('Ride service is running on PORT: 3003...');
});