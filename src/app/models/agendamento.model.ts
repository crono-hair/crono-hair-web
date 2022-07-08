import { Time } from "@angular/common";
import { Duration } from 'duration-converter';
import { Cliente } from "./cliente.model";
import { Funcionario } from "./funcionario.model";
import { Produto } from "./produto.model";
import { Servico } from "./servico.model";

export class Agendamento {
    id: number = 0;
    data: Date = new Date;
    duracao: Duration = new Duration;
    cliente_Id: number = 0;
    cliente: Cliente = new Cliente;
    funcionario_Id: number = 0;
    funcionario: Funcionario = new Funcionario;
    servico_Id: number = 0;
    servico: Servico = new Servico;

    produtos: Produto[] = [];
}