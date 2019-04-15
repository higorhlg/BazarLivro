import * as mongoose from 'mongoose'

export interface Announcement extends mongoose.Document{
    _id: object
    title: string,
    synopsis: string,
    isbn: string,
    nameAuthor: string,
    price: number,
    availableForExchange: boolean,
    _id_user: string,
    announcementDescription: string,
    photo: string,
    activityStatus: string
}

const announcementSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    synopsis:{
        type: String,
        required: true
    },
    isbn:{
        type: String,
        minlength: 13,
        maxlength: 13,
        unique: true,
        required: false
    },
    nameAuthor:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    availableForExchange:{
        type: Boolean,
        required: true
    },
    announcementDescription:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: false
    },
    activityStatus:{
        type: String,
        required: true,
        enum: ['Ativo', 'Inativo', 'Pausado']
    }
})

export const Announcement = mongoose.model<Announcement>('Announcement', announcementSchema)