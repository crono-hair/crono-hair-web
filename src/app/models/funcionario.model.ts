import { FuncionarioCargo } from "./funcionario-cargo.model";
import { Pessoa } from "./pessoa.model";
import { Salao } from "./salao.model";

export class Funcionario {
    id: number = 0;
    pessoa_Id: number = 0;
    cargo_Id: number = 0;
    salao_Id: number = 0;
    cargo: FuncionarioCargo = new FuncionarioCargo;
    salao: Salao = new Salao;
    pessoa: Pessoa = new Pessoa;
}