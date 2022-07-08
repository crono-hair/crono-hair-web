import { Salao } from "./salao.model";
import { Usuario } from "./usuario.model";

export class SalaoResponsavel {
    id: number = 0;
    usuario_Id: number = 0;
    salao_Id: number = 0;
    usuario: Usuario = new Usuario;
    salao: Salao = new Salao;
}