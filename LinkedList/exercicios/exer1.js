//exercicio1

const LinkedList = require('../LinkedList.js');
const lista_trilha = new LinkedList();

//inserir dados no começo
lista_trilha.insertAtBeginning("Cachoeira");
lista_trilha.insertAtBeginning("Caverna");
lista_trilha.insertAtBeginning("Mirante");
lista_trilha.insertAtBeginning("Lago");

//inserir dados no final
lista_trilha.insertAtEnd("Pedras");

//exibir dados
lista_trilha.toString();

//remover dados
lista_trilha.removeByValue("Mirante");
lista_trilha.toString();

//verificar dados
console.log(lista_trilha.find("Mirante"));