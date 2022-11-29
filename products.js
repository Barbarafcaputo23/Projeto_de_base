let scanf = require("scanf");

const produtos = [
  {
    nome: "Notebook",
    categoria: "Eletrônico",
    valor: 1999.99,
  },
  {
    nome: "Impressora",
    categoria: "Eletrônico",
    valor: 999.99,
  },
  {
    nome: "Caneta BIC",
    categoria: "Escolar",
    valor: 0.5,
  },
  {
    nome: "Lapiseira Pentel",
    categoria: "Escolar",
    valor: 7.5,
  },
];

var listar = produtos.filter(listar);
listar.forEach((listar) => {
  console.log(listar);
});

function valor(value) {
  if (value.valor >= 0 && value.valor <= 1000) return value;
  else {
    console.log("Não existe produto com esse valor");
  }
}

var valor = produtos.filter(valor);
valor.forEach((valor) => {
  console.log(valor);
});

function listar() {
  produtos.forEach((p) => {
    console.log(p);
  });
}

function returnEletronico(value) {
  if (value.categoria == "Eletrônico") return value;
}
var eletronicoProducts = produtos.filter(returnEletronico);
eletronicoProducts.forEach((eletronicoProducts) => {
  console.log(eletronicoProducts);
});

function returnEscolar(value) {
  if (value.categoria == "Escolar") return value;
}
var escolarProducts = produtos.filter(returnEscolar);
escolarProducts.forEach((escolarProducts) => {
  console.log(escolarProducts);
});
