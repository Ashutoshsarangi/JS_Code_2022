/*
Preorder Traversal:- root left right
Post Order:- left right root
In Order:-  Left root right
*/

class Node {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root;
    constructore(){
        
    }

    showInOrder(root){
        // left Root Right
        if(root == null)
            return;
        this.showInOrder(root.left);
        console.log(root.value);
        this.showInOrder(root.right);   
    }
    showPreOrder(root){
        // Root, left right
        if(root == null){
            return;
        }
        console.log(root.value);
        this.showPreOrder(root.left);
        this.showPreOrder(root.right);
        
    }
    showPostOrder(root){
        // left right root
        if(root == null)
            return;
        this.showPostOrder(root.left);
        this.showPostOrder(root.right);
        console.log(root.value);
        
    }
}

let newBtree = new BinaryTree();
newBtree.root = new Node(25);
newBtree.root.left = new Node(15);
newBtree.root.right = new Node(50);
newBtree.root.left.left = new Node(10);
newBtree.root.left.right = new Node(22);
newBtree.root.right.left = new Node(35);
newBtree.root.right.right = new Node(70);
newBtree.root.left.left.left = new Node (4);
newBtree.root.left.left.right = new Node(12);
newBtree.root.left.right.left = new Node(18);
newBtree.root.left.right.right = new Node(24);
newBtree.root.right.left.left = new Node(31);
newBtree.root.right.left.right = new Node(44);
newBtree.root.right.right.left = new Node(66);
newBtree.root.right.right.right = new Node(90);

let current = newBtree.root;
console.log(current);
newBtree.showInOrder(current);
console.log('------------------------ PreOrder ---------------------');
newBtree.showPreOrder(current);
console.log('------------------------ Post Order ---------------------');
newBtree.showPostOrder(current);
