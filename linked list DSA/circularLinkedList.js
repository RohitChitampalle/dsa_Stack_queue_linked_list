var head;
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }

    add(head,element,data){
        let Newtemp=new Node(data)
        let current;
        if(head.next == null){
            head.next = Newtemp
            Newtemp.next=head
        }
        else{
            current=head

            while(current.data != element){
                current=current.next

            }
            let temp =new Node(data)
            temp.next=current.next
            current.next=temp
        }
        //     current=head


        // }
    }

    print_list(head){
        let temp=head

        if (head != null) {
            do {
                console.log(temp.data);
                temp = temp.next;
            } while (temp != head);
        } 
    }
}

let node1 =new Node(10)
head=node1
node1.add(head,1,20)
node1.print_list(head)
node1.add(head,20, 30)

console.log("---x---x---x---x---x---")
node1.print_list(head)
