import {ModelRouter} from '../../common/model.router'
import * as restify from 'restify'
import * as mongoose from 'mongoose'
import {Transaction} from './transacao.model'
import { authorize } from '../../security/authz.handler';
import { User } from '../Usuario/usuario.model';
import { Announcement } from '../Anuncio/anuncio.model';
import { NotFoundError } from 'restify-errors';


class TransactionRouter extends ModelRouter<Transaction>{
    constructor(){
        super(Transaction)
    }

    findById = (req: any, resp: any, next: any)=>{
        this.model.findById(req.params.id)
            .populate('vendedor', ['nome', 'email'])
            .populate('comprador', ['nome', 'email'])
            .populate('anuncio', ['title', 'price'])
            .then(this.render(resp, next)).catch(next)
    }

    protected prepareAll(query: mongoose.DocumentQuery<Transaction[], Transaction>): mongoose.DocumentQuery<Transaction[], Transaction>{
        return query.populate('vendedor', ['nome', 'email'])
                    .populate('comprador', ['nome', 'email'])
                    .populate('anuncio', ['title', 'price'])
    }

    validateId = (req:restify.Request, resp: restify.Response, next:restify.Next)=>{
        User.findById({_id: req.body.comprador}).then(user=>{
            if(user){
                console.log('comprador ok')
                next()
            }
            else{
                console.log('comprador não encontrado')
                next(new NotFoundError('Comprador não encontrado'))
            }
        }).catch(next)
    
        User.findById({_id: req.body.vendedor}).then(user=>{
            if(user){
                console.log('vendedor ok')
                next()
            }
            else{
                console.log('vendedor não encontrado')
                next(new NotFoundError('Vendedor não encontrado'))
            }
        }).catch(next)

        Announcement.findById(req.body.anuncio).then(anuncio=>{
            if(anuncio){
                console.log('Anuncio ok')
                next()
            }
            else{
                console.log('Anuncio não encontrado')
                next(new NotFoundError('Anuncio não encontrado'))
            }
        }).catch(next)
    }
    
    applyRouter(application: restify.Server){

        application.get('/transactions', /* authorizeNoProfile(), */ this.findAll) 
        application.get('/transactions/:id', /* authorizeNoProfile(), */[this.validateId, this.findById])
        application.post('/transactions', /* authorizeNoProfile(), */[this.validateId,this.saveTransacao])     
        application.patch('/transactions/:id', /* authorizeNoProfile(), */[this.validateId, this.update])
        application.del('/transactions/:id', /* authorizeNoProfile(), */[this.validateId, this.delete])
        
    }
}

export const transactionsRouter = new TransactionRouter()