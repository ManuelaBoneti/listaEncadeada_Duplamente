const Node = require('./node.js');

class LinkedList {
    #head = undefined;
    #length = 0;

    insertAtBeginning(value){
        //cria um nó
        let newNode = new Node(value);

        //o novo nó aponto para o antigo 'head'
        newNode.next = this.#head;

        //atualiza
        this.#head = newNode;
    
        //incremento
        this.#length++;
    }

    insertAtEnd(value){
        let newNode = new Node(value);

        if(this.#head === undefined){
            this.#head = newNode;
            return;
        }

        let current =  this.#head;
        while (current.next !== undefined){
            current = current.next;
        }

        current.next = newNode;
        this.#length++;
    }

    removeByValue(value) {

        if(this.#head === undefined){
            return;
        }

        if(this.#head.value === value){

            this.#head = this.#head.next;
            this.#length--;
            return;
        }

        let current = this.#head;
        while(current.next !== undefined && current.next.value !== value){
            current = current.next; 
        }

        if(current.next !== undefined) {
            current.next = current.next.next;
            this.#length--;
        }
    }

    find (value){
        let current = this.#head;

        //percorre a lista até encontrar o nó ou até o final
        while(current !== undefined){
            console.log(current.value);
            if(current.value === value){
                return current; //Nó encontrado
            }
            current = current.next;
        }
        return undefined;// se não encontrar retorna null
    }

    toString(){
        let current = this.#head;
        let list = '';
        while(current !== undefined) {
            list += current.value;
            if(current !== undefined){
                list += ' ->';
            }
            current = current.next;
        }
        console.log(list + ' undefined');
    }

    isEmpty = () => this.#head === undefined;
}

module.exports = LinkedList;

