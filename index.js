const Server = require("./server/server");

const PORT = process.env.PORT || 5000;
const server = new Server(PORT);

server.start();