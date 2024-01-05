
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
    // reverseLinkedList(head) {
    //     var prev = null;
    //     var current = head;
    //     var next = null;
    //     while (current != null) {
    //         next = current.next;
    //         current.next = prev;
    //         prev = current;
    //         current = next;
    //     }
    //     head = prev;
    //     this.print_heade(head)
    // }
    lenthOfLinkedList(head) {
        let cnt = 0;
        let temp = head
        while (temp != null) {
            temp = temp.next
            cnt++
        }
        return cnt

    }

    middleNode(head) {
        let length = this.lenthOfLinkedList(head)
        let middle = Math.floor(length / 2)
        let temp = head
        let cnt = 0;
        while (cnt < middle) {

            temp = temp.next
            cnt++
        }

        return temp

    }

    merge(head1, head2) {
        var merged = new Node(-1);
        var temp = merged;

        // While head1 is not null and head2
        // is not null
        while (head1 != null && head2 != null) {
            if (head1.data < head2.data) {
                temp.next = head1;
                head1 = head1.next;
            } else {
                temp.next = head2;
                head2 = head2.next;
            }
            temp = temp.next;
        }

        // While head1 is not null
        while (head1 != null) {
            temp.next = head1;
            head1 = head1.next;
            temp = temp.next;
        }

        // While head2 is not null
        while (head2 != null) {
            temp.next = head2;
            head2 = head2.next;
            temp = temp.next;
        }
        return merged.next;
    } 

    findMid(head) {
        var slow = head, fast = head.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    mergeSort(head) {

        if (head.next == null)
            return head;

        let middle =this.findMid(head)

        var head2 = middle.next;
        middle.next = null;
        var newHead1 = this.mergeSort(head);
        var newHead2 = this.mergeSort(head2);
        var finalHead = this.merge(newHead1, newHead2);

        return finalHead;
    }

}

var head = new Node(7);
var temp = head;
temp.next = new Node(10);
temp = temp.next;
temp.next = new Node(5);
temp = temp.next;
temp.next = new Node(20);
temp = temp.next;
temp.next = new Node(3);
temp = temp.next;
temp.next = new Node(2);
temp = temp.next;

// Apply merge Sort
head =head.mergeSort(head);
// let node1 = new Node(1);
// head = node1
// tail = node1
// // console.log("Head before is ->", head)
// // console.log("----x----x----x----x----x----x----")
// node1.insertAtHead(head, 3)
// node1.insertAtHead(head, 4)
// node1.insertAtHead(head, 2)
// node1.insertAtHead(head, 5)

// node1.print_heade(head)
// console.log("--------x----x----x----x--------")
// let resul = node1.mergeSort(head)
// console.log(resul)







// node1.print_heade(d1)
// let h5 = node1.insertAtTail(h4, 16)
// node1.print_heade(head)
