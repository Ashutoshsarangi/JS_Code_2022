class Node{
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}
class DoubleLinkedList {
    add(val){
        let newNode = new Node(val);
        if(this.head == null){
            this.head = newNode;
            return ;
        }
        let currentNode = this.head;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        newNode.prev = currentNode;
        
    }
    // Insert After a value /position
    insert(val, newVal){
        let newNode = new Node(newVal);
        if(this.head == null)
            return;
        if(this.head.value == val && this.head.next == null){
            this.head.next = newNode;
            newNode.prev = this.head;
            return;
        }
        let currentNode = this.head;
        while(currentNode.next != null){
            if(currentNode.value == val){
                // Add the logic
                newNode.prev= currentNode;
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                currentNode.next.prev = newNode.next;
            }
            currentNode = currentNode.next;
        }
        if(currentNode.value == val){
            currentNode.next = newNode;
            newNode.prev = currentNode;
        }
        
    }
    show(){
        let currentNode = this.head;
        while (currentNode != null){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log('*************************************');
    }
}

let dLinkedList = new DoubleLinkedList();
dLinkedList.add(2);
dLinkedList.add(3);
dLinkedList.add(5);
dLinkedList.add(7);
dLinkedList.show();
dLinkedList.insert(5, 10);
dLinkedList.show();
dLinkedList.insert(2, 20);
dLinkedList.show();
dLinkedList.insert(7, 70);
dLinkedList.show();
