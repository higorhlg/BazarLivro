import * as restify from 'restify'
import {Router} from '../../common/router'
import mongoose from 'mongoose'
import {URLSearchParams} from 'url'
import { Usuario } from "./Usuario.model";

class UsuarioRouter extends Router{
    applyRouter(application: restify.Server) {
        application.get('/usuarios', (req, resp, next) =>{
            Usuario.find().then(usuarios =>{
                resp.json(usuarios)
                return next()
            }).catch(next)
        })
    }
}