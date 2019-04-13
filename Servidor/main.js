"use strict";
exports.__esModule = true;
var server_1 = require("./Server/server");
var usuario_router_1 = require("./Classes/Usuario/usuario.router");
var server = new server_1.Server;
server.bootstrap([usuario_router_1.usersRouter]).then(function (server) {
    console.log("servidor executando na porta " + server.application.address().port);
})["catch"](function (error) {
    console.log("Servidor n\u00E3o inicializou .. " + error);
    process.exit(1);
});
