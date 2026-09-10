import { Pagamento } from "./Pagamento.js";

export class PagamentoCartao extends Pagamento {
    #ultimosNum;
    #parcelas;

    constructor(valor, ultimosNum, parcelas) {
        super(valor),
        this.#ultimosNum = ultimosNum;
        this.#parcelas = parcelas;
    }
    get ultimosNum() {
        return this.#ultimosNum
    }
    get parcelas() {
        return this.#parcelas
    }

    processarPag(){
        console.log(`Enviar dados do cartão para operadora ${this.#ultimosNum} e as parcelas ${this.#parcelas}`);
    }
}