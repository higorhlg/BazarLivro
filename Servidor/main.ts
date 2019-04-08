import { Server } from "./Server/server";

const server:Server = new Server

server.bootstrap([]).then( server=> {
    
    console.log(`servidor executando na porta ${server.application.address().port}`)
}).catch( error=>{
    console.log(`Servidor não inicializou .. ${error}`)
    process.exit(1)
})
