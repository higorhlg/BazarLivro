import * as restify from 'restify'


export const handleError = (req: restify.Request, resp: restify.Response
    , err: any, done: any) => {
    console.log(err)

    err.toJSON = () => {
        return {
            message: err.message
        }
    }

    switch(err.name){
        case 'MongooseError':
            if(err.code === 11000){
                err.statusCode = 400
            }
            break
        case 'ValidationError':
            err.statusCode = 400
            break
        case 'CastError':
            err.statusCode = 400
            break
    }

    done()
}