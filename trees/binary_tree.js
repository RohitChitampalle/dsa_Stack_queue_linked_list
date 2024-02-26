// javascript program for different tree traversals

// Class containing left and right child of current
// node and key value
class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

// Root of Binary Tree
var root = null;

// Given a binary tree, print its nodes in inorder
function printInorder(node) {
    if (node == null)
        return;

    // First recur on left child */
    console.log(node.key + " ");
    
    // Then print the data of node
    printInorder(node.left);

    // Now recur on right child
    printInorder(node.right);
}

function printLevelOrder(){
    let h= height(root)
    var i;
    for(i=1; i<=h;i++){
        printCurrentLevel(root, i)
    }


}
  function height(root) {
      if (root == null)
          return 0;
      else {
          // Compute height of each subtree
          var lheight = height(root.left);
          var rheight = height(root.right);

          // Use the larger one
          if (lheight > rheight)
              return (lheight + 1);
          else
              return (rheight + 1);
      }
  }

   function printCurrentLevel(root, level) {
       if (root == null)
           return;
       if (level == 1)
           console.log(root.key + " ");
       else if (level > 1) {
           printCurrentLevel(root.left, level - 1);
           printCurrentLevel(root.right, level - 1);
       }
   }

// Driver method 

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);



console.log("Inorder traversal of binary tree is ");
printLevelOrder();


