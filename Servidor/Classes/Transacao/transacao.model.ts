import mongoose from 'mongoose'

export interface Transaction extends mongoose.Document{
    _id:object,
    id_comprador: string,
    id_vendedor: string,
    id_anuncio: string,
    data: Date,    
    estado: string
}


const transactionSchema = new mongoose.Schema({
    id_comprador:{
        type:String,
        required:true,       
    },
    id_vendedor:{
        type:String,
        required: true,
    },
    id_anuncio:{
        type:String,
        required: true,
    },
    data:{
        type:Date,
        required:true,
    },
    estado:{
        type:String,
        required:true,
    },
})



export const Transaction = mongoose.model<Transaction>('Transaction',transactionSchema)
