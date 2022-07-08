import { TipoAcesso } from "./tipo-acesso.model";
import { Usuario } from "./usuario.model";

export class RelUsuarioTipoAcesso {
    id: number = 0;
    usuario_Id: number = 0;
    tipo_Acesso_Id: number = 0;
    usuario: Usuario = new Usuario;
    acesso: TipoAcesso = new TipoAcesso;
}