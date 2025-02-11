const http = require('http');
const appMode = process.env.APP_MODE || 'development';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Application is running in ${appMode} mode!\n`);
});

server.listen(8080, () => {
    console.log(`Server running on http://localhost:8080 in ${appMode} mode.`);
});
