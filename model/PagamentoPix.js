import { Pagamento } from "./Pagamento.js";

export class PagamentoPix extends Pagamento{
    #chavePix;
    constructor(valor, chavePix){
        super(valor),
        this.#chavePix = chavePix
    }

    get chavePix() {
        return this.#chavePix;
    }

    processarPag(){
        console.log(`Copie e cola essa chave pix ${this.#chavePix} no valor ${this.getvalor}`)
    }
}
