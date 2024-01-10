/*Javascript Program to implement a stack using
two queue */

// Two inbuilt queues
class Stack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    pop() {
        if (this.q1.length == 0)
            return;

        // Leave one element in q1 and
        // push others in q2.
        while (this.q1.length != 1) {
            this.q2.push(this.q1[0]);
            this.q1.shift();
        }

        // Pop the only left element
        // from q1f
        this.q1.shift();

        // swap the names of two queues
        this.q = this.q1;
        this.q1 = this.q2;
        this.q2 = this.q;
    }

    push(x) {
        // if no elements are there in q1
        this.q1.push(x);
    }

    top() {
        if (this.q1.length == 0)
            return -1;

        while (this.q1.length != 1) {
            this.q2.push(this.q1[0]);
            this.q1.shift();
        }

        // last pushed element
        let temp = this.q1[0];

        // to empty the auxiliary queue after
        // last operation
        this.q1.shift();

        // push last element to q2
        this.q2.push(temp);

        // swap the two queues names
        this.q = this.q1;
        this.q1 = this.q2;
        this.q2 = this.q;
        return temp;
    }

    size() {
        console.log(this.q1.length);
    }

    isEmpty() {
        // return true if the queue is empty.
        return this.q1.length == 0;
    }

    front() {
        return this.q1[0];
    }
}

// Driver code
let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log("current size: ");
s.size();
console.log(s.top());
s.pop();
console.log(s.top());
s.pop();
console.log(s.top());

console.log("current size: ");
s.size();

// This code is contributed by Susobhan Akhuli
