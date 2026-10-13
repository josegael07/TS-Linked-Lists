class LinkedList<T>{
    head : Node<T> | null;
    tail : Node<T> | null;
    size : number;

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(val: T): void {
        let node = new Node<T>(val);

        // If empty
        if (this.head === null && this.tail === null) {
            this.head = node;
            this.tail = node;
            this.size++;
            return;
        }

        if (this.tail !== null) {
            node.prev = this.tail;
            this.tail.next = node;
            this.size++;
        }
    }

    prepend(val: T): void {
        let node = new Node<T>(val);

        // If empty
        if (this.head === null && this.tail === null) {
            this.head = node;
            this.tail = node;
            this.size++;
            return;
        }

        if (this.head !== null) {
            node.next = this.head;
            this.head.prev = node;
            this.size++;
        }
    }
}

class Node<T>{
    prev: Node<T> | null;
    next: Node<T> | null;
    data: T;

    constructor(val: T){
        this.prev = null;
        this.next = null;
        this.data = val;
    }
}