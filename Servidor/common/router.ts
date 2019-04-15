import * as restify from 'restify'
import * as restifyError from 'restify-errors'
import {EventEmitter} from 'events'

export abstract class Router extends EventEmitter{
    abstract applyRouter(application: restify.Server) : any

    render(response: restify.Response, next: restify.Next){
        return (document: any)=>{
            if(document){
                this.emit('beforeRender', document)
                response.json(document)
            }
            else{
                throw new restifyError.NotFoundError('Usuário não encontrado')
            }
            next()
        }
    }
}