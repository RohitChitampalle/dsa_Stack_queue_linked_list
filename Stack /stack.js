class Stack {
    constructor() {
        this.data = []
    }

    // : Used to add an element to the stack. This method adds an element at the top of the stack.

    add_to_stack(data) {
        this.data.push(data)
    }

    //  Removes an element from the stack, if the function is call on an empty stack it indicates “Underflow”. This method returns the topmost element of stack and removes it.Return underflow when called on an empty stack.

    remove_from_stack() {
        if (this.data.length == 0) {
            return "Underflow";
        }
        return this.data.pop()
    }

    // top_element_Stack(): returns the top most elements in the stack, but doesn’t delete it.It Return the topmost element without removing it from the stack.
    top_element_Stack() {
        return `Top of the stack is ${this.data[this.data.length - 1]}`
    }

    isEmpty(){
        return this.data.length===0?"Stack is Empty":"Stack is not Empty"
    }

    stack_size(){
        return `Size of the Stack is ${this.data.length}`
    }

}

let stc1=new Stack()

stc1.add_to_stack(1)
stc1.add_to_stack(2)
stc1.add_to_stack(3)
stc1.add_to_stack(4)
stc1.add_to_stack(5)
stc1.add_to_stack(6)
// --------------
let re=stc1.remove_from_stack()
console.log(`from stack ${re} is removed`)

let TopOfStack=stc1.top_element_Stack()
console.log(TopOfStack)

let StackEmpty=stc1.isEmpty()
console.log(StackEmpty)

let sizeOfStack=stc1.stack_size()
console.log(sizeOfStack)