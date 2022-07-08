import { Contato } from "./contato.model";
import { Endereco } from "./endereco.model";

export class Pessoa {
    id: number = 0;
    nome: string = '';
    cpf: number = '' as unknown as number;
    contato_Id: number = 0;
    endereco_Id: number = 0;
    contato: Contato = new Contato;
    endereco: Endereco = new Endereco;
}