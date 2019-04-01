"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Server/Server");
const server = new Server_1.Server;
server.bootstrap([]).then(server => {
    console.log(`servidor executando na porta ${server.application.address().port}`);
}).catch(error => {
    console.log(`Servidor não inicializou .. ${error}`);
    process.exit(1);
});
