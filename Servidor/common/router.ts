import * as restify from 'restify'
import * as restifyError from 'restify-errors'

export abstract class Router{
    abstract applyRouter(application: restify.Server) : any

    render(response: restify.Response, next: restify.Next){
        return (document: any)=>{
            if(document){
                response.json(document)
            }
            else{
                throw new restifyError.NotFoundError('Usuário não encontrado')
            }
            next()
        }
    }
}