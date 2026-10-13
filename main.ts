class LinkedList<T> {
    start: Node<T> | null;
    end: Node<T> | null;
    numNodes: number;

    constructor() {
        this.start = null;
        this.end = null;
        this.numNodes = 0;
    }

    append(val: T): void {
        let node = new Node<T>(val);

        // If empty
        if (this.start === null && this.end === null) {
            this.start = node;
            this.end = node;
            this.numNodes++;
            return;
        }

        if (this.end !== null) {
            node.prev = this.end;
            this.end.next = node;
            this.end = node;
            this.numNodes++;
        }
    }

    prepend(val: T): void {
        let node = new Node<T>(val);

        // If empty
        if (this.start === null && this.end === null) {
            this.start = node;
            this.end = node;
            this.numNodes++;
            return;
        }

        if (this.start !== null) {
            node.next = this.start;
            this.start.prev = node;
            this.start = node;
            this.numNodes++;
        }
    }

    size(): number {
        return this.numNodes;
    }

    head(): T| null {
        return (this.start == null)? null : this.start.data;
    }

    tail(): T | null {
        return (this.end == null)? null : this.end.data;
    }

    at(index: number): T | null {
        if (index >= this.numNodes || index < 0) {
            return null;
        }

        let temp: Node<T> | null = this.start;
        if (temp === null) {
            return null;
        }

        while (index > 0) {
            if (temp === null) {
                return null;
            }
            temp = temp.next;

            index--;
        }

        if (temp === null) {
            return null;
        }
        return temp.data;
    }

    pop(): T | null {
        if (this.start === null && this.end === null) {
            return null;
        }

        let temp: Node<T> | null = this.start;

        if (temp === null) {
            return null;
        }

        if (temp.next === null) {
            this.start = null;
            this.end = null;
            this.numNodes = 0;
        } else {
            temp.next.prev = null;
            this.start = temp.next;
            this.numNodes--;
        }

        return temp.data;
    }

    contains(val: T): boolean {
        let temp: Node<T> | null = this.start;
        if (temp === null) {
            return false;
        }

        while (temp != null) {
            if (temp.data === val) {
                return true;
            }

            temp = temp.next;
        }

        return false;
    }

    findIndex(val: T): number {
        let temp: Node<T> | null = this.start;
        if (temp === null) {
            return -1;
        }

        let index: number = 0;
        while (temp != null) {
            if (temp.data === val) {
                return index;
            }

            temp = temp.next;
            index++;
        }
        return -1;
    }

}

class Node<T> {
    prev: Node<T> | null;
    next: Node<T> | null;
    data: T;

    constructor(val: T) {
        this.prev = null;
        this.next = null;
        this.data = val;
    }
}