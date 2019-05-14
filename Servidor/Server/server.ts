import * as restify from 'restify'
import mongoose from 'mongoose'
import { Router } from '../common/router';
import corsMiddleware from 'restify-cors-middleware';
import { handleError } from './error.handler';
import { environment } from '../common/environment';
import { tokenParser } from '../security/token.parser';

export class Server{
    application: restify.Server = restify.createServer({
        name:"Server",
        version: "1.0"
    })

    initializeDb(): any{
        (<any>mongoose).Promise = global.Promise
        mongoose.set('useCreateIndex', true)
        return mongoose.connect(environment.db.url, 
                                { useNewUrlParser: true})
    }

    initRouters(routers:Router[]): Promise<any>{
        return new Promise( (resolve,reject) =>{
        try{
            const corsOptions: corsMiddleware.Options = {
                preflightMaxAge: 86400,
                origins: ['*'],
                allowHeaders: ['authorization'],
                exposeHeaders: ['x-custom-header']
              }
            const cors: corsMiddleware.CorsMiddleware = corsMiddleware(corsOptions)
      
            this.application.pre(cors.preflight)
            
            this.application.use(cors.actual)
            this.application.use(restify.plugins.queryParser())//geralmente utilizando no get para converter pesquisas
            this.application.use(restify.plugins.bodyParser())// convert json em object automaticamente
            this.application.use(tokenParser)
        
            for( let router of routers){
                router.applyRouter(this.application)
            }


            this.application.listen(environment.server.port, () =>{
                resolve(this.application)
            })

            this.application.on('restifyError',handleError)
        }catch(err){    
            reject(err)
        }
        })
    }

    bootstrap(routers: Router[] = []):Promise<Server>{
        return this.initializeDb().then( 
            () =>  this.initRouters(routers).then( 
            () => this) )
    }

}