// JS program to implement a stack that supports
// getMinimum() in O(1) time and O(1) extra space.

// A user defined stack that supports getMin() in
// addition to push() and pop()
class MyStack {
    constructor() {
        this.s = [];
        this.minEle;
    }

    // Prints minimum element of MyStack
    getMin() {
        if (this.s.length == 0)
            console.log("Stack is empty");

        // variable minEle stores the minimum element
        // in the stack.
        else
            console.log("Minimum Element in the stack is: ", this.minEle);
    }

    // Prints top element of MyStack
    peek() {
        if (this.s.length == 0) {
            console.log("Stack is empty ");
            return;
        }
        let t = this.s[0]; // Top element.

        console.log("Top Most Element is: ");

        // If t < minEle means minEle stores
        // value of t.
        (t < this.minEle) ? console.log(this.minEle) : console.log(t);

    }

    // Remove the top element from MyStack
    pop() {
        if (this.s.length == 0) {
            console.log("Stack is empty ");
            return;
        }
        console.log("Top Most Element Removed: ");
        let t = this.s[0]; // Top element.
        this.s.shift();

        // Minimum will change as the minimum element
        // of the stack is being removed.
        if (t < this.minEle) {
            console.log(this.minEle);
            this.minEle = (2 * this.minEle) - t;
        }

        else
            console.log(t);
    }

    // Removes top element from MyStack
    push(x) {
        // Insert new number into the stack
        if (this.s.length == 0) {
            this.minEle = x;
            this.s.unshift(x);
            console.log("Number Inserted: ", x);
            return;
        }

        // If new number is less than minEle
        else if (x < this.minEle) {
            this.s.unshift(2 * x - this.minEle);
            this.minEle = x;
        }

        else
            this.s.unshift(x);

        console.log("Number Inserted: ", x);
    }


};


// Driver Code
let s = new MyStack;

// Function calls
s.push(5);
s.push(3);
s.getMin();
s.push(2);
s.push(1);
s.getMin();
s.pop();
s.getMin();
s.pop();
s.peek();

// This code is contributed by adityamaharshi21
