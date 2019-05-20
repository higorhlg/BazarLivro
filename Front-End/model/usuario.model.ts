import { UsuarioService } from 'src/app/usuario.service';

export class User {
    _id: object;
    nome: string;
    dataNascimento: string;
    cpf: string;
    endereco: string;
    usuario: string;
    senha:  any | string;
    email: string;
    telefone: string;
    profile?: string[];
}
