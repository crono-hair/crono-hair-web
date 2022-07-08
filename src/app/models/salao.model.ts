import { Agendamento } from "./agendamento.model";
import { Cliente } from "./cliente.model";
import { Endereco } from "./endereco.model";
import { Usuario } from "./usuario.model";

export class Salao {
    id: number = 0;
    cnpj: number = '' as unknown as number;
    razaoSocial: string = '';
    siteLink?: string;
    endereco_Id: number = 0;
    endereco: Endereco = new Endereco;
    responsaveis: Usuario[] = [];
    agendamentos: Agendamento[] = [];
    clientes: Cliente[] = [];
}