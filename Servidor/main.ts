import { Server } from "./Server/server";
import { usersRouter } from "./Classes/Usuario/usuario.router";
import { announcementRouter } from "./Classes/Anuncio/anuncio.router";
import { transactionsRouter } from "./Classes/Transacao/transacao.router";

const server: Server = new Server

server.bootstrap([
    usersRouter,
    announcementRouter,
    transactionsRouter
]).then( server=> {
    
    console.log(`servidor executando na porta ${server.application.address().port}`)
}).catch( error=>{
    console.log(`Servidor não inicializou  ${error}`)
    process.exit(1)
})
