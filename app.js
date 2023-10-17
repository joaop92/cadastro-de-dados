// Declarando as variáveis
let nome = "";
let salario = 0;
let idade = 0;
let diploma = false;

// Capturando os dados do formulário
nome = document.querySelector("#nome").value;
salario = parseFloat(document.querySelector("#salario").value);
idade = parseInt(document.querySelector("#idade").value);
diploma = document.querySelector("#diploma").checked;

// Validando os dados
if (nome === "") {
  alert("O nome deve ser preenchido");
  return;
}

if (isNaN(salario)) {
  alert("O salário deve ser um número");
  return;
}

if (isNaN(idade)) {
  alert("A idade deve ser um número");
  return;
}

// Imprimindo os dados
console.log("Nome:", nome);
console.log("Salário:", salario);
console.log("Idade:", idade);
console.log("Diploma:", diploma);
