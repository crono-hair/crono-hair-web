import { FuncionarioCargo } from "./funcionario-cargo.model";
import { Pessoa } from "./pessoa.model";
import { Salao } from "./salao.model";

export class FuncionarioRequest {
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

    cargoS: string = '';
    pessoa_Id: number = 0;
    cargo_Id: number = 0;
    salao_Id: number = 0;
    cargo: FuncionarioCargo = new FuncionarioCargo;
    salao: Salao = new Salao;
    pessoa: Pessoa = new Pessoa;
}


export class Funcionario {
    id: number = 0;
    pessoa_Id: number = 0;
    cargo_Id: number = 0;
    salao_Id: number = 0;
    cargo: FuncionarioCargo = new FuncionarioCargo;
    salao: Salao = new Salao;
    pessoa: Pessoa = new Pessoa;
}