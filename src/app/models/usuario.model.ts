import { Pessoa } from "./pessoa.model";
import { TipoAcesso } from "./tipo-acesso.model";

export class Usuario {
    id: number = 0;
    idEncrypted: string = '';
    nome: string = '';
    celular: string = '';
    telefone?: string;
    dataNascimento: Date | string = new Date;
    sexo: string = 'Não informado';
    cpf?: number = '' as unknown as number;
    logradouro?: string;
    numero?: string;
    bairro?: string;
    cidade?: string;
    uf?: string;
    cep?: string;
    
    email: string = '';
    password?: string;
    token: string = '';
    pessoa_Id: number = 0;
    tipoAcessos: TipoAcesso[] = [];
}


export class UsuarioFiltro {

}

export enum Sexo {
    Feminino = 'Feminino',
    Masculino = 'Masculino',
    'Não Informado' = 'Não Informado' 
}