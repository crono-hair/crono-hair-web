import { Pessoa } from "./pessoa.model";
import { TipoAcesso } from "./tipo-acesso.model";

export class Usuario {
    id: number = 0;
    email: string = '';
    token: number = '' as unknown as number;
    pessoa_Id: number = 0;
    pessoa: Pessoa = new Pessoa;
    tipoAcessos: TipoAcesso[] = [];
}