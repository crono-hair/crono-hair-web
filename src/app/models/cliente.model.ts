import { Pessoa } from "./pessoa.model";
import { Salao } from "./salao.model";

export class Cliente {
    id: number = 0;
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