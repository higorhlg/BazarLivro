import {Router} from '../common/router'
import * as mongoose from 'mongoose'
import { NotFoundError } from 'restify-errors';

export abstract class ModelRouter<D extends mongoose.Document> extends Router {
    constructor( protected model: mongoose.Model<D>) {
        super()
    }
    protected prepareOne(query: mongoose.DocumentQuery<D, D>): mongoose.DocumentQuery<D, D>{
        return query
    }

    protected prepareAll(query: mongoose.DocumentQuery<D[], D>): mongoose.DocumentQuery<D[], D>{
        return query
    }
    validateId = (req: any, resp: any, next: any)=>{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            next(new NotFoundError('Document not found'))
        } else {
            next()
        }
    }
    findAll =  (req: any, resp: any, next: any)=>{
        this.prepareAll(this.model.find()).then(this.render(resp, next))
        .catch(next)
    }
    findById = (req: any, resp: any, next: any)=>{
        this.model.findById(req.params.id).then(this.render(resp, next)).catch(next)
    }
    save =  (req: any, resp: any, next: any) => {
        let document = new this.model(req.body)
        document.save().then(this.render(resp, next)).catch(next)
        return next()
    }
    update = (req: any, resp: any, next: any)=>{
            const op = {runValidators: true, new:true}
            this.model.findByIdAndUpdate(req.params.id, req.body, op).then(this.render(resp, next))
            .catch(next)
    }
    delete = (req: any, resp: any, next: any)=>{
        this.model.remove({_id:req.params.id}).exec().then((user:any)=>{
            if(user.n){
                resp.send(204)
            }else{
                resp.send(404)
            }
            next()
        })
    }


}