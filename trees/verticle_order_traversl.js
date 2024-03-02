class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function preOrderTraversal(root, hd, vd, m) {
    if (!root) return;

    // key = horizontal distance (30 bits) + vertical distance (30 bits)
    // map will store key in sorted order. Thus nodes having same
    // horizontal distance will sort according to vertical distance.
    const val = BigInt(hd << 30n | vd);

    // insert in map
    if (!m.has(val)) {
        m.set(val, []);
    }
    m.get(val).push(root.data);

    preOrderTraversal(root.left, hd - 1n, vd + 1n, m);
    preOrderTraversal(root.right, hd + 1n, vd + 1n, m);
}

function verticalOrder(root) {
    // map to store all nodes in vertical order.
    // keys will be horizontal + vertical distance.
    const mp = new Map();

    preOrderTraversal(root, 0n, 1n, mp);

    // print map
    let prekey = BigInt(Number.MAX_SAFE_INTEGER);
    for (const [key, value] of [...mp.entries()].sort((a, b) => {
            // sort map entries by key
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        })) {
        if (prekey !== (key >> 30n)) {
            console.log(root.data);
        }
        prekey = key >> 30n;
        process.stdout.write(value.join(" ") + " ");
    }
}

// Driver code
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);
root.right.right.right = new Node(9);

console.log("Vertical order traversal :- ");
verticalOrder(root);
