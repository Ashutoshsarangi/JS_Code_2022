class Node {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree{
    root;
    
    insert(root,val){
        if(root == null){
            return;
        }
        if(root.value >= val ){
            if(root.left == null){
                root.left = new Node(val);
                return;
            }else{
                this.insert(root.left, val);
            }
        }else{
            if(root.right == null){
                root.right = new Node(val);
                return;
            }else{
                this.insert(root.right, val);
            }
        }
    }
    inOrderTraversal(root){
        if(root == null){
            return;
        }

        // Left Root right
        this.inOrderTraversal(root.left);
        console.log(root.value);
        this.inOrderTraversal(root.right);
    }

    portOrderTraversal(root){
        if(root == null){
            return;
        }
        // Left right Root
        this.portOrderTraversal(root.left);
        this.portOrderTraversal(root.right);
        console.log(root.value);
        
        
    }
}
let bTree = new BinaryTree();
bTree.root = new Node(11);

bTree.insert(bTree.root, 6);
bTree.insert(bTree.root, 8);
bTree.insert(bTree.root, 19);
bTree.insert(bTree.root, 4);
bTree.insert(bTree.root, 10);
bTree.insert(bTree.root, 5);
bTree.insert(bTree.root, 17);
bTree.insert(bTree.root, 43);
bTree.insert(bTree.root, 49);
bTree.insert(bTree.root, 31);

console.log(bTree.root);
bTree.inOrderTraversal(bTree.root);
console.log('***************************');
bTree.portOrderTraversal(bTree.root);
