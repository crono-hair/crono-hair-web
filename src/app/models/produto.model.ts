import { ProdutoMarca } from "./produto-marca.model";

export class Produto {
    id: number = 0;
    nome: string = '';
    produtoTipo: string = '';
    valorUnitario: number = 0;
    vencimento: Date = new Date;
    marca_Id: number = 0;
    marca: ProdutoMarca = new ProdutoMarca;
}