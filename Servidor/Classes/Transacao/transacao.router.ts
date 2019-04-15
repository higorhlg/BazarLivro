import {ModelRouter} from '../../common/model.router'
import * as restify from 'restify'
import * as restifyError from 'restify-errors'
import {Transaction} from './transacao.model'
import { authenticate } from '../../security/auth.handler';
import { authorize } from '../../security/authz.handler';


class TransactionRouter extends ModelRouter<Transaction>{
    constructor(){
        super(Transaction)
    }
    
    applyRouter(application: restify.Server){

        application.get('/transactions', this.findAll) 
        application.get('/transactions/:id', this.findById)
        application.post('/transactions', this.save)     
        application.patch('/users/:id', this.update)
        application.del('/users/:id', this.delete)
        
    }
}

export const transactionsRouter = new TransactionRouter()