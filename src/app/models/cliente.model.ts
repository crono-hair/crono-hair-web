import { Pessoa } from "./pessoa.model";
import { Salao } from "./salao.model";

export class ClienteRequest {
    id: number = 0;
    idEncrypted: string = '';
    nome: string = '';
    celular: string = '';
    telefone?: string;
    email?: string;
    dataNascimento: Date | string = new Date;
    sexo: string = 'Não informado';
    cpf?: number = '' as unknown as number;
    logradouro?: string;
    numero?: string;
    bairro?: string;
    cidade?: string;
    uf?: string;
    cep?: string;
}


export class Cliente {
    id: number = 0;
    idEncrypted: string = '';
    pessoa_Id: number = 0;
    pessoa: Pessoa = new Pessoa;
    salao_Id: number = 0;
    salao: Salao = new Salao;
}

export class ClienteFiltro {
    id?: number = 0;
    pessoa_Id?: number = 0;
    salao_Id?: number = 0;
}