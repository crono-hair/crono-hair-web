import { Agendamento } from "./agendamento.model";
import { MetodoPagamento } from "./metodo-pagamento.model";

export class AgendamentoPagamento {
    id: number = 0;
    agendamento_Id: number = 0;
    metodoPagamento_Id: number = 0;
    agendamento: Agendamento = new Agendamento;
    metodoPagamento: MetodoPagamento = new MetodoPagamento;
    valorTotal: number = 0;
    desconto?: number = 0;
    dataPagamento: Date = new Date;
    dataVencimento: Date = new Date;
}