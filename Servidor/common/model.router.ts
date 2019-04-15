import {Router} from '../common/router'
import * as mongoose from 'mongoose'

export abstract class ModelRouter<D extends mongoose.Document> extends Router {
    constructor( protected model: mongoose.Model<D>) {
        super()
    }
    findAll =  (req : any, resp : any, next : any)=>{
        this.model.find().then(this.render(resp, next))
        .catch(next)
    }

    findById =  (req : any, resp : any, next : any)=>{
        this.model.findById(req.params.id).then(this.render(resp, next))
        .catch(next)
    }
}