const Node = require("./Node.js");

class DoublyLinkedList {
    #head = undefined;
    #tail = undefined;
    #length = 0;

    //add nó ao final da lista(calda)
    append(value){
    const newNode = new Node(value);

    //se a cabeça está vazia
    if(this.#head == undefined){
        this.#head = newNode;
        this.#tail = newNode;
    }
    else{
        //o ponterio 'prev' vai ser o último add 
        this.#tail.next = newNode;
        newNode.prev = this.#tail;
        this.#tail = newNode;
    }

    this.#length++;
    }

    //add um nó no final da lista
    prepend(value){
        const newNode = new Node(value);
        if(this.#head == undefined){
            this.#head = newNode;
            this.#tail = newNode;
        }
        else{
            newNode.next = this.#head;
            this.#head.prev = newNode;
            this.#head = newNode;
        }
        this.#length++
    }

    //remover o nó do final da lista
    removeLast(){
        if(this.#head == undefined) return undefined;

        const removeNode = this.#head;
        if(this.#head == this.#tail){
            this.#head = undefined;
            this.#tail = undefined;
        }
        else{
            this.#tail = this.#tail.prev;
            this.#tail = undefined;
        }
        this.#length--;
        return removeNode.value;
    }

    //remover o nó do início da lista
    removeFirst(){
        if(this.#head == undefined) return undefined;

        const removeNode = this.#head;
        if(this.#head === this.#tail) {
            this.#head = undefined;
            this.#tail = undefined;
        }
        else{
            this.#head = this.#head.next;
            this.#head.prev = undefined;
        }
        this.#length--;
        return removeNode.value;
    }

    //Percorrer a lista do início ao fim
    traverse(){
        if(this.isEmpty()){
            console.log("A lista está vazia");
            return;
        }

        let current = this.#head;
        //enquanto o 'current/cabeça' retornar verdadeiro, ou seja, até ela estiver preenchida
        while(current){
            //exibir os valores do nó
            console.log(current.value);
            //exibir sempre o próximo
            current = current.next;
        }
    }

    //Percorrer a lista do fim ao início
    traverseReverse(){
        if(this.isEmpty()){
            console.log("A lista está vazia");
            return;
        }

        let current = this.#tail;
        while(current){
            console.log(current.value);
            //exibir sempre o anterior
            current = current.prev;
        }
    }

    insertInt(value,index){
        if(index < 0 || index > this.#length) return undefined;

        const newNode = new Node(value);

        if(index=== 0 ){
            this.prepend(value);
            return;
        }
        if(index === this.#length){
            this.append(value);
            return;
        }
        let current = this.#head;
        let previous;
        let count = 0;

        while (count < index){
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        newNode.prev = previous;
        previous.next = newNode;
        current.prev = newNode;

        this.#length++;
    }

    //Encontrar o índice de um valor específico
    indexOf(value){
        let current = this.#head;
        let index = 0;

        while(current){
            if(current.value === value)
                return index; //valor encontrado

            current = current.next;
            index++;
            
        }
        return -1; //valor não encontrado
    }

    //Remover um nó em uma posição específica
    removeAt(index){
        if(index < 0 || index >= this.#length) return undefined;

        if(index === 0) return this.removeFirst();
        if(index === this.#length -1) return this.removeLast();

        let current = this.#head;
        let count = 0;

        while(count < index) {
            current = current.next;
            count++;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;

        this.#length--;
        return current.value;
    }

    //procurar um valor na lista
    find (value){
        let current = this.#head;

        while(current !== undefined){
            console.log(current.value);
            if(current.value === value){
                return current; //Nó encontrado
            }
            current = current.next;
        }
        return undefined;// se não encontrar retorna null
    }

    toArray(){
        const array = [];
        let current = this.#head;

        while(current){
            array.push(current.value);
            current = current.next;
        }
        return array;
    }

    //retorna o tamamho da lista
    size = () => this.#length;

    //verifica se a lista está vazia
    isEmpty = () => this.#length === 0;

    //exibir a lista(opcional, para facilitar a visualização)
    toString(){
        let current = this.#head;
        let list = '';
        while(current !== undefined){
            list += current.value + ' ->';
            current = current.next;
        }
        console.log(list + 'undefined');
    }
}

module.exports = DoublyLinkedList ;
   



