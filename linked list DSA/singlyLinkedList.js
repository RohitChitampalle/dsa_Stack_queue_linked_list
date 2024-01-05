
// Linked List Class

/* Node Class */
var head; // head of list
var tail;
class Node {

    // Constructor to create a new node 
    constructor(data) {
        this.data = data;
        this.next = null;
    }


    insertAtHead(head, data) {
        let temp = new Node(data)
        let current;
        if (head.next == null) {
            head.next = temp
        } else {
            current = head

            while (current.next) {
                current = current.next
            }
            current.next = temp
        }
    }
    insertAtTail(tail, data) {
        let temp = new Node(data)
        tail.next = temp
        // return temp
    }

    print_heade(head) {
        let temp = head

        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }

    insertAtPosition(head, position, data) {
        if (position <= 0) {
            console.log("Please enter a valid index.");
            return
        }
        let temp = new Node(data);
        let cnt = 0;
        let cur, prev
        //inserting at 1 position
        if (position == 1) {
            temp.next = head;
            head = temp;
        } else {
            cur = head

            while (cnt < position - 1) {
                prev = cur
                cur = cur.next
                cnt++
            }
            temp.next = cur
            prev.next = temp
        }
    }

    deleteNode(position, head) {
        if (position == 1) {
            let temp = head
            head = head.next
            temp.next = null
            // return head

        } else {
            //deleting any middle node and last node
            let cur = head
            let prev = null

            let cnt = 1;
            while (cnt < position) {
                prev = cur
                cur = cur.next
                cnt++
            }
            prev.next = cur.next
            cur.next = null
        }
    }
    reverseLinkedList(head) {
        var prev = null;
        var current = head;
        var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        head = prev;
        this.print_heade(head)
    }

}


let node1 = new Node(10);
head = node1
tail = node1
// console.log("Head before is ->", head)
node1.print_heade(head)
console.log("----x----x----x----x----x----x----")
node1.insertAtHead(head, 12)
node1.insertAtHead(head, 13)
node1.insertAtHead(head, 14)
node1.insertAtHead(head, 15)
// node1.insertAtPosition(head, 2, 50)
// node1.print_heade(head)
// node1.deleteNode(2, head)
node1.print_heade(head)
console.log("--------x----x----x----x--------")
node1.reverseLinkedList(head)









// node1.print_heade(d1)
// let h5 = node1.insertAtTail(h4, 16)
// node1.print_heade(head)
