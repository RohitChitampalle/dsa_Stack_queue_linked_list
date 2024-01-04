var head;
class Node {
    constructor(data) {
        this.prev = null
        this.data = data
        this.next = null

    }

    add(head, data) {
        let temp = new Node(data)
        let current;
        if (head.next == null) {
            head.next = temp
            temp.prev = head

        } else {
            current = head
            while (current.next) {
                current = current.next
            }
            current.next = temp
        }


    }

    print_list(head) {
        let temp = head;
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }


}

let node1 = new Node(10)
head = node1
node1.add(head, 20)
node1.print_list(head)
console.log("---x---x---x---")
node1.add(head, 30)
node1.print_list(head)
