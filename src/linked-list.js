const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);

        if (!this._head) {
            this._head = node;
            this._tail = node;
            
        }
        else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
            
        }

        this.length++;
    }

    head() {
        if (this._head) {
            return this._head.data;
        }
        else {
            throw new Error('List is empty!');
            return null;
        }
    }

    tail() {
        if (this._tail) {
            return this._tail.data;
        }
        else {
            throw new Error('List is empty!');
            return null;
        }
    }
    //прописать проверку на валидность индекса
    at(index) {
        var count = 0;
        var currentNode = this._head;

        if (index > this.length || index < 0) {
            throw new Error("Incorrect length");
        }
        else {
            while (count < index) {
                currentNode = currentNode.next;
                count++;
            }

            return currentNode.data;
        }
    }

    insertAt(index, data) {
        var node = new Node(data);
        var count = 1;
        var currentNode = this._head;
        var beforeNode = null;
        var nextNode = null;

        if ( index > this.length || index < 0) {
            throw new Error("Incorrect length");
        }
        else {
            while (count < index) {
                currentNode = currentNode.next;
                count++;
            }

            beforeNode = currentNode;
            beforeNode.next = node;
            nextNode = currentNode.next;
            node.prev = beforeNode;
            node.next = nextNode;
            nextNode.prev = node;

            this.length++;
        }
    }

    isEmpty() {
        if (!this._head)
        {
            return true;
        }
        else {
            return false;
        }
    }

    clear() {
        
        

        while (this._head.next)
        {
        	this._head = this._head.next;
        	this._head.prev = null;
            
            
            
           
        }
         this._head = null;
         this._tail = null;
        
        this.length = 0;
    }

    deleteAt(index) {}

    reverse() {}

    lengthOf(data) {

    }
}

module.exports = LinkedList;
