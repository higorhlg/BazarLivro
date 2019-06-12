import * as mongoose from 'mongoose'

export interface Announcement extends mongoose.Document{
    _id: object
    title: string,
    synopsis: string,
    isbn: string,
    nameAuthor: string,
    price: number,
    availableForExchange: boolean,
    user: mongoose.Types.ObjectId,
    announcementDescription: string,
    photo: string,
    activityStatus: string
}

const announcementSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxlength: 60,
    },
    synopsis:{
        type: String,
        required: true
    },
    isbn:{
        type: String,
        //minlength: 13,
        //maxlength: 13,
        unique: true,
        required: false,
        // match: /((978[\--– ])?[0-9][0-9\--– ]{10}[\--– ][0-9xX])|((978)?[0-9]{9}[0-9Xx])/
        match: /^(?:ISBN(?:-10)?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$)[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/
    },
    nameAuthor:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    price:{
        type: Number,
        required: true,
        match: /^[0-9]+([\,|\.]{0,1}[0-9]{2}){0,1}$/
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
        enum: ['Ativo', 'Inativo', 'Pausado'],
        default: 'Ativo'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

export const Announcement = mongoose.model<Announcement>('Announcement', announcementSchema)