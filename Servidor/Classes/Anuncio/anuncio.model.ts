import * as mongoose from 'mongoose'

export interface Announcement extends mongoose.Document{
    _id: object
    title: string,
    synopsis: string,
    isbn: string,
    nameAuthor: string,
    price: number,
    availableForExchange: boolean,
    _id_user: string
}

const announcementSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    synopsis:{
        type: String,
        require: true
    },
    isbn:{
        type: String,
        unique: true
    },
    nameAuthor:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    availableForExchange:{
        type: Boolean,
        require: true
    }
})

export const Announcement = mongoose.model<Announcement>('Announcement', announcementSchema)