//exercicio4 - DOUBLYLINKEDLIST

const DoublyLinkedList = require('../DoublyLinkedList.js');
const lista = new DoublyLinkedList();

console.log("\n--------------------");
console.log('Lista inserindo no fim');

lista.append(10);
lista.toString(); 
lista.append(20);
lista.toString(); 
lista.append(30);
lista.toString(); 

// a) REMOVER DADA UMA POSIÇÃO
console.log("\n----------------");
console.log('Removido:', lista.removeAt(1));
lista.toString(); 

// b) PROCURAR UM VALOR NA LISTA
console.log("\n----------------");
console.log(lista.find(30));

// const no = lista.find(30);
// console.log(no ? `Encontrado: ${no.value}` : 'Não encontrado');

// c) CONVERTER PARA ARRAY
console.log("\n----------------");
console.log("Lista para array:")
console.log(lista.toArray());