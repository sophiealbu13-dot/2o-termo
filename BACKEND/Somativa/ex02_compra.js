const entrada = require('readline-sync');
const produto1 = {
    nome: "Ferro",
    preco: 10.50,
    estoque: 25
};
const produto2 = {
    nome: "Aço",
    preco: 12.50,
    estoque: 50
};
    const produto3 = {
    nome: "Madeira",
    preco: 12.50,
    estoque: 25
};
const produto  = entrada.question("Nome do material: ");
const precoProduto = entrada.questionFloat("Preco do produto: ");
const qtdProduto = entrada.questionInt("Quantos ele comprou? ");

// Processamento
const totalConta = precoProduto + qtdProduto;


console.log(`Produto: ${produto.nome}`);
console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);
console.log(`Produto: ${produto.nome} | ${produto.preco} | ${produto.estoque}`);