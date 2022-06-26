const http = require('http');
const app = require('./index.js')

const port = process.env.PORT || 4001;

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Service listen on port ' + port);
})