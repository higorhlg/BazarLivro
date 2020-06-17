import {User} from './Classes/Usuario/usuario.model'

declare module 'restify' {
  export interface Request {
    authenticated: User
  }
}