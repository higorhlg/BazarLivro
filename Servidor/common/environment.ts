export const environment = {
    server: { port: process.env.SERVER_PORT || 5000 },
    db: { 
        url: process.env.DB_URL || 'mongodb+srv://mario:mariod@bazarlivro-g8jqg.mongodb.net/bazarLivro?retryWrites=true'
                                    //url para acessar MongoDB
    /**Para conectar no banco via terminal use o seguinte comando 
     * mongo "mongodb+srv://bazarlivro-g8jqg.mongodb.net/bazarLivro" --username mario --password mariod
     * Para conectar no banco via Mongo Compass copie o seguinte string e mongo compass detecta 
     * automaticamente e configura a conexão autómatica
     * mongodb+srv://mario:mariod@bazarlivro-g8jqg.mongodb.net/bazarLivro
     */
    },
    security: {
        saltRounds: process.env.SALT_ROUNDS || 10,
        apiSecret: process.env.API_SECERT || 'meat-api-secret'
    }
}