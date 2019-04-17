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


export const Transaction = mongoose.model<Transaction>('Transaction',transactionSchema)
