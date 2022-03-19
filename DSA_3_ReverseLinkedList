class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }     
}

class LinkedList {

    // Add value in the Linked LinkedList
    constuctor(){
        this.head = null;
    }
    add(val){
        let currentNode = new Node(val);
        if(this.head == null){
            // console.log('1111');
            this.head = currentNode;
            // console.log(this.head, '----> inside if This .head');
        }else{
            let temp = this.head;
            // console.log(temp, '--> Temp else');
            while(temp.next !== null){
                temp = temp.next;
            }
            temp.next = currentNode;
        }
    }
    reverseNode(){
        let prev = null;
        let upComming = null;
        let currentNode = this.head;
        while(currentNode != null){
            upComming = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = upComming;
        }
        return prev;
    }
    show(){
        let currentNode = this.head;
        while(currentNode !== null){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
    }
    showReverse(CurrentReversehead){
        while(CurrentReversehead != null){
            console.log(CurrentReversehead.value);
            CurrentReversehead = CurrentReversehead.next;
        }
    }
}

let linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(3);
linkedList.add(5);
linkedList.add(7);
linkedList.show();
let reverseHead = linkedList.reverseNode();
linkedList.showReverse(reverseHead);
