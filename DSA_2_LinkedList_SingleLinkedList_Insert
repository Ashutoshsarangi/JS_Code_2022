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

    // Insert in between or After An Element

    insertAfter(val, newVal){
        let currentNode = new Node(newVal);
        if(this.head == null)
            return false;
        let temp = this.head;
        while(temp.next!== null){
            if(temp.value === val){
                // add the logic for insert
                currentNode.next = temp.next;
                temp.next = currentNode;
                break;
            }
            temp = temp.next;
        }
        if(temp.next == null && temp.value === val){
            temp.next = currentNode;
        }
        
    }

    deleteNumber(val){
        // If Head == null we need to retun 
        // if head is the only Element and it match the value
        // else{
            // we need to have previous and current count so that it would be easier to play with
        //}
        // if end is the Value

        if(this.head == null)
            return;
        if(this.head.value === val && this.head.next == null){
            this.head = null;
            return;
        }else if (this.head.value === val && this.head.next !== null){
            // this is remove from the Beginning
            this.head = this.head.next;
            return;
        }
        let previousNode = this.head;
        let currentNode = this.head;
        while(currentNode.next !== null){
            if(currentNode.value === val){
                // need to add logic for removal of this Node
                previousNode.next = currentNode.next;
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        // At the end
        if(currentNode.next == null && currentNode.value == val){
            previousNode.next = null; // Here End the Linked List;
        }
            
        
    }
    show(){
        let temp = this.head;
        while(temp.next !== null){
            console.log(temp);
            temp = temp.next;
        }
        console.log(temp); // this is for last Element
    }
}


let linkedList = new LinkedList();

linkedList.add(9);
linkedList.add(2);
linkedList.add(7);
linkedList.add(122);
linkedList.show();
console.log('---------------------');
linkedList.insertAfter(7, 100);
linkedList.show();
linkedList.deleteNumber(7);
console.log('+++++++++++++++++++++++++++');
linkedList.show();
linkedList.deleteNumber(9); // removing from the Beginning
console.log('+++++++++++++++++++++++++++');
linkedList.show();
linkedList.deleteNumber(122); // removing At the End
console.log('#####################');
linkedList.show();
