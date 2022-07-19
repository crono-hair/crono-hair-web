import { Agendamento } from "./agendamento.model";
import { Cliente } from "./cliente.model";
import { Usuario } from "./usuario.model";

export class Salao {
    id: number = 0;
    idEncrypted: string = '';
    cnpj: number = '' as unknown as number;
    razaoSocial: string = '';
    siteLink?: string;

    logradouro?: string;
    numero?: string;
    bairro?: string;
    cidade?: string;
    uf?: string;
    cep?: string;
}

export class SalaoFiltro {

}