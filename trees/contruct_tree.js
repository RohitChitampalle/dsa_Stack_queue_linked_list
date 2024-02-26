// Javascript program to construct a tree using inorder and preorder traversal
    class TreeNode {
        constructor(x) {
            this.val = x;
            this.left = null;
            this.right = null;
        }
    }

let set = new Set();
let stack = [];

// Function to build tree using given traversal
function buildTree(preorder, inorder) {
    let root = null;

    for (let pre = 0, In = 0; pre < preorder.length;) {

        let node = null;
        do {
            node = new TreeNode(preorder[pre]);
            if (root == null) {
                root = node;
            }
            if (stack.length != 0) {
                if (set.has(stack[stack.length - 1])) {
                    set.delete(stack[stack.length - 1]);
                    stack.pop().right = node;
                } else {
                    stack[stack.length - 1].left = node;
                }
            }
            stack.push(node);
        } while (preorder[pre++] != inorder[In] && pre < preorder.length);

        node = null;
        while (stack.length != 0 && In < inorder.length &&
            stack[stack.length - 1].val == inorder[In]) {
            node = stack.pop();
            In++;
        }

        if (node != null) {
            set.add(node);
            stack.push(node);
        }
    }

    return root;
}

// Function to print tree in Inorder
function printInorder(node) {
    if (node == null)
        return;

    /* first recur on left child */
    printInorder(node.left);

    /* then print the data of node */
    console.log(node.val + " ");

    /* now recur on right child */
    printInorder(node.right);
}

// driver program to test above functions
let In = [9, 8, 4, 2, 10, 5, 10, 1, 6, 3, 13, 12, 7];
let pre = [1, 2, 4, 8, 9, 5, 10, 10, 3, 6, 7, 12, 13];
let len = In.length;
let root = buildTree(pre, In);
printInorder(root);


