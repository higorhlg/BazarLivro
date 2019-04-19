import mongoose from 'mongoose'

export interface Transaction extends mongoose.Document{
    _id:object,
    comprador: mongoose.Types.ObjectId,
    vendedor: mongoose.Types.ObjectId,
    anuncio: mongoose.Types.ObjectId,
    data: Date,
    estado: string
}

const transactionSchema = new mongoose.Schema({
    comprador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,       
    },
    vendedor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    anuncio:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Announcement',
        required: true,
    },
    data:{
        type:Date,
        default: Date.now,
        required:true
    },
    estado:{
        type:String,
        required:true,
        default: 'A entregar'
    },
})

const saveMiddleware = function(this:Transaction,next: any){
    const transaction: Transaction = this
    if(!transaction.$isDefault('data')){
        next()
    }
    else {
        let localNow = new Date(transaction.data.getTime() - (transaction.data.getTimezoneOffset() * 60000  ))
        transaction.data = localNow
        next()
    }
}

const updateMiddleware = function(this: mongoose.Query<Transaction>, next: any){
    if(!this.getUpdate().data)
        next()
    else {
        let localNow = new Date(this.getUpdate().getTime() - (this.getUpdate().getTimezoneOffset() * 60000  ))
        this.getUpdate().data = localNow
    }
}

transactionSchema.pre('save', saveMiddleware)
//transactionSchema.pre('update', updateMiddleware)

export const Transaction = mongoose.model<Transaction>('Transaction',transactionSchema)
