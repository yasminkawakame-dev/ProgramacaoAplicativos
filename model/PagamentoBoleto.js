import { Pagamento } from "./Pagamento.js";

export class PagamentoBoleto extends Pagamento{
    #codigoBarra
    constructor(valor, codigoBarra) {
        super(valor),
            this.#codigoBarra = codigoBarra
    }

    get codigoBarra() {
        return this.#codigoBarra
    }

    processarPag(){
        console.log(`Boleto gerado comm sucesso ${this.#codigoBarra}`);
    }
}