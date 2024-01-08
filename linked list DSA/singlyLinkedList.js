
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
        return head
        // this.print_heade(head)
    }
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

        let middle = this.findMid(head)

        var head2 = middle.next;
        middle.next = null;
        var newHead1 = this.mergeSort(head);
        var newHead2 = this.mergeSort(head2);
        var finalHead = this.merge(newHead1, newHead2);

        return finalHead;
    }
    insert_At_Tail(head, tail, val) {
        let temp = new Node(val)
        if (head == null) {
            head = temp
            tail = temp

        } else {

            tail.next = temp
            tail = temp
        }

    }
    sumof_two_numbers(first, second) {

        let ansHead = null;
        let ansTail = null;

        let carry = 0;

        while (first != null && second != null) {
            let sum = carry + first.data + second.data

            let digit = sum % 10

            this.insert_At_Tail(ansHead, ansTail, digit)

            carry = sum / 10

            first = first.next
            second = second.next

        }

        while (first != null) {

            let sum = carry + first.data
            let digit = sum % 10

            this.insert_At_Tail(ansHead, ansTail, digit)

            carry = sum / 10
            first = first.next

        }



        while (second != null) {

            let sum = carry + second.data
            let digit = sum % 10

            this.insert_At_Tail(ansHead, ansTail, digit)

            carry = sum / 10
            second = second.next
        }

        while (carry != 0) {
            let sum = carry
            let digit = sum % 10

            this.insert_At_Tail(ansHead, ansTail, digit)

            carry = sum / 10
        }


        return ansHead
    }
    add_two_numbers(head, head2) {
        let first = this.reverseLinkedList(head)
        let second = this.reverseLinkedList(head2)

        let ans = this.sumof_two_numbers(first, second)

        ans = this.reverseLinkedList(ans)

        return ans
    }

// delete node from end 
    deleteNthNodeFromEnd(head, n) {
        let Length = this.lenthOfLinkedList(head);
        let nodeFromBeginning = Length - n + 1;
        let prev = null;
        let temp = head;
        for (let i = 1; i < nodeFromBeginning; i++) {
            prev = temp;
            temp = temp.next;
        }
        if (prev == null) {
            head = head.next;
            return head;
        } else {
            prev.next = prev.next.next;
            return head;
        }
    }


    removeLoop(head) {

        var s = new Set();
        var prev = null;
        while (head != null) {

            // If we have already has this node
            // in hashmap it means there is a cycle and we
            // need to remove this cycle so set the next of
            // the previous pointer with null.

            if (s.has(head)) {
                prev.next = null;
                return true;
            }

            // If we are seeing the node for
            // the first time, insert it in hash
            else {
                s.add(head);
                prev = head;
                head = head.next;
            }
        }

        return false;
    }

    pairWiseSwap(head) {
        var temp = head;

        /* Traverse only till there are 
        atleast 2 nodes left */
        while (temp != null && temp.next != null) {

            /* Swap the data */
            var k = temp.data;
            temp.data = temp.next.data;
            temp.next.data = k;
            temp = temp.next.next;
        }
        head=temp
    }

    cntNodes(head) {
        if (head == null) return 0;

        return 1 + this.cntNodes(head.next);
    }

    updateList(head, m) {
        // Total nodes in the list
        var cnt = this.cntNodes(head);

        if (cnt != m && m < cnt) {
            // Count of nodes to be skipped
            // from the beginning
            var skip = cnt - m;
            var prev = null;
            var curr = head;

            // Skip the nodes
            while (skip > 0) {
                prev = curr;
                curr = curr.next;
                skip--;
            }

            // Change the pointers
            prev.next = null;
            var tempHead = head;
            head = curr;

            // Find the last node
            while (curr.next != null) curr = curr.next;

            // Connect it to the head
            // of the sub list
            curr.next = tempHead;
        }
        this.print_heade(head)
    }
}


let node1 = new Node(6);
head = node1
node1.insertAtHead(head, 4)
node1.insertAtHead(head, 9)
node1.insertAtHead(head, 5)
node1.insertAtHead(head, 7)

node1.updateList(head,2)
// node1.pairWiseSwap(head)
// node1.print_heade(head)
console.log("----xx----xx----xx----xxx----")
// head.next.next.next.next.next = head.next.next;

// if (node1.removeLoop(head)) {
//     console.log("Linked List after removing loop<br/>");
//     node1.print_heade(head);
// } else
//     console.log("No Loop found");

// let newNode=node1.deleteNthNodeFromEnd(head, 2)
// console.log(newNode)
// // )
// node1.print_heade(head)
// console.log("--------x----x----x----x--------")
// let resul = node1.mergeSort(head)
// console.log(resul)



// var head = new Node(7);
// var temp = head;
// temp.next = new Node(10);
// temp = temp.next;
// temp.next = new Node(5);
// temp = temp.next;
// temp.next = new Node(20);
// temp = temp.next;
// temp.next = new Node(3);
// temp = temp.next;
// temp.next = new Node(2);
// temp = temp.next;

// // Apply merge Sort
// head = head.mergeSort(head);







// node1.print_heade(d1)
// let h5 = node1.insertAtTail(h4, 16)
// node1.print_heade(head)


