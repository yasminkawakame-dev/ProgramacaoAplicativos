import { PagamentoBoleto } from "./model/PagamentoBoleto.js";
import { PagamentoCartao } from "./model/PagamentoCartao.js";
import { PagamentoPix } from "./model/PagamentoPix.js";

const pix = new PagamentoPix(1000,"ihpsfhpfjhidfhpods");

const cartao = new PagamentoCartao(500, 4983, 2);

const boleto = new PagamentoBoleto(250, "5239261460124616046");

pix.aplicarDesconto(10);

const pagamentos = [pix, cartao, boleto];

console.log("Pagamentos criados!");

for(let i = 0; i < pagamentos.length; i++) {
    pagamentos[i].processarPag();
}

console.log("Pagamentos processados");


