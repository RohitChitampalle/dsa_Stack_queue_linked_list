// Javascript program to reverse a Queue

    let queue = [];

    // Utility function to print the queue
    function Print()
    {
		while (queue.length > 0) {
        console.log(queue[0]);
    queue.shift();
		}
	}

    // Function to reverse the queue
    function reversequeue()
    {
        let stack = [];
		while (queue.length > 0) {
        stack.push(queue[0]);
    queue.shift();
		}
		while (stack.length > 0) {
        queue.push(stack[stack.length - 1]);
    stack.pop();
		}
	}

    queue = []
    queue.push(10);
    queue.push(20);
    queue.push(30);
    queue.push(40);
    queue.push(50);
    queue.push(60);
    queue.push(70);
    queue.push(80);
    queue.push(90);
    queue.push(100);

    reversequeue();
    Print();


