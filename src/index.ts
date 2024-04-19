import http from 'http';
import app from './app';

// try to get port from env.PORT first
const port = process.env.PORT ?? 8080;


// Listen to server
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is running to ${port} port.`);
})

