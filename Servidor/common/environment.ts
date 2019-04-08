export const environment = {
    server: { port: process.env.SERVER_PORT || 5000 },
    db: { 
        url: process.env.DB_URL || 'mongodb+srv://mario:mariod@bazarlivro-g8jqg.mongodb.net/bazarLivro?retryWrites=true'
                                    //url para acessar MongoDB
    },
    security: {
        saltRounds: process.env.SALT_ROUNDS || 10,
        apiSecret: process.env.API_SECERT || 'meat-api-secret'
    }
}