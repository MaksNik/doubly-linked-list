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
        return this;
    }

    head() {
        if (this._head) {
            return this._head.data;
        }
        else {
            return null;
        }
    }

    tail() {
        if (this._tail) {
            return this._tail.data;
        }
        else {
            return null;
        }
    }
    
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
        var count = 0;
        var currentNode = this._head;
        var beforeNode = null;

        if (this.isEmpty())
        {
            this.append(data);
            return this;

        }
            while (count < index) {
                currentNode = currentNode.next;
                count++;
            }

            beforeNode = currentNode.prev;
            node.next = currentNode;
            node.prev = beforeNode;
            beforeNode.next = node;
            currentNode.prev = node;

            this.length++;
            return this;
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
        if (this.isEmpty()) {
            return this;
        }
        while (this._head.next)
        {
        	this._head = this._head.next;
        	this._head.prev = null;
        	this.length--;
        }
         this._head = null;
         this._tail = null;
        
         this.length--;
         return this;
    }

    deleteAt(index) {
        var currentNode = this._head;
        var count = 0;
        var prevNode, nextNode;

        //if (this._head === this._tail)
        //{
        //    this._head = null;
        //    this._tail = null;
        //    this.length--;
        //}
        
        if (index === 0)
        {
            if (this._head === this._tail) {
                this._head = null;
                this._tail = null;
                this.length--;
                return this;
            }

            this._head = this._head.next;
            this._head.prev = null;
            this.length--;
        }
        else if (index === this.length) {
            this._tail = this._tail.prev;
            this._tail.next = null;
            this.length--;
        }
        else {
            while (count < index)
            {
                prevNode = currentNode;
                currentNode = currentNode.next;
                count++;
            }
            nextNode = currentNode.next;
            nextNode.prev = prevNode;
            prevNode.next = nextNode;
            currentNode = null;
            this.length--;
        }
        return this;
    }

    reverse() {
        if (this._head === this._tail) {
            return this;
        }
        else {
            var prevNode, tmp;
            this._tail = this._head;
            this._head = this._head.next;
            
            while (this._head.next) {
                prevNode = this._head.prev;
                tmp = prevNode.next;
                prevNode.next = prevNode.prev;
                prevNode.prev = tmp;
                this._head = this._head.next;
            }

            prevNode = this._head.prev;
            tmp = prevNode.next;
            prevNode.next = prevNode.prev;
            prevNode.prev = tmp;
            this._head.next = this._head.prev;
            this._head.prev = null;
        }
        return this;
    }

    indexOf(data) {
        let currentNode = this._head;

        if (this.length === 0) {
            return -1;
        }
        else {
            for (var index = 0; index < this.length; index++) {
                if (currentNode.data === data) {
                    return index;
                }
                else {
                    currentNode = currentNode.next;
                }
            }

            return -1;
        }

    }

    
}

module.exports = LinkedList;
