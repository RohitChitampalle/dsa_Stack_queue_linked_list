
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
        temp.next = head
        head = temp
        return head
    }
    insertAtTail(tail, data) {
        let temp = new Node(data)
        while(tail.next != null){
            
            temp=tail.next
        }
        tail.next = temp
        return temp
    }

    print_heade(head) {
        let temp = head

        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }

    insertAtPosition(head, position, data) {
        let temp = JSON.parse(JSON.stringify(head));
        let cnt = 1;
//inserting at 1 position
        if(position == 1){
             temp=this.insertAtHead(head,data)
             head=temp
            return head
        }
        //inserting at mid position

        while (cnt <  position - 1) {
            temp = temp.next
            cnt++
        }

        //inserting at last position
        if(temp.next == null){
            temp.next=this.insertAtTail(tail,data)
            head = temp
            return
        }
        let nodeToInsert =  new Node(data)
        nodeToInsert.next=temp.next
        temp.next = nodeToInsert

        // temp.next = nodeToInsert
    }
}


let node1 = new Node(10);
console.log(node1.data)
console.log(node1.next)
head = node1
tail = node1
console.log("Head before is ->", head)
let h1 = node1.insertAtTail(tail, 12)
console.log("----x----x----x----x----x----x----")
let h2 = node1.insertAtTail(h1, 13)
let h3 = node1.insertAtTail(h2, 14)
node1.insertAtPosition(head,5,50)
node1.print_heade(head)
console.log("--------x----x----x----x--------")
let h4 = node1.insertAtTail(h3, 15)
let h5 = node1.insertAtTail(h4, 16)
node1.print_heade(head)
