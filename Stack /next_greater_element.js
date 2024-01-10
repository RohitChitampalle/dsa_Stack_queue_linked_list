// A Stack based Javascript program to find next greater element
    // greater element for all array elements.

    /* prints element and NGE pair for all
    elements of arr[] of size n */
    function printNGE(arr, n)
    {
	var s = [];

    /* push the first element to stack */
    s.push(arr[0]);

    // iterate for rest of the elements
    for (var i = 1; i < n; i++)
    {

		if (s.length == 0) {
        s.push(arr[i]);
    continue;
		}

    /* if stack is not empty, then
    pop an element from stack.
    If the popped element is smaller
    than next, then
    a) print the pair
    b) keep popping while elements are
    smaller and stack is not empty */
    while (s.length == 0 == false && s[s.length-1] < arr[i])
    {
        console.log(s[s.length - 1]+ " --> " + arr[i] );
    s.pop();
		}

    /* push next to stack so that we can find
    next greater for it */
    s.push(arr[i]);
	}

    /* After iterating over the loop, the remaining
    elements in stack do not have the next greater
    element, so print -1 for them */
    while (s.length !=0) {
        console.log(s[s.length - 1] + " --> " + -1 );
    s.pop();
	}
}

    /* Driver code */
    var arr = [11, 13, 21,1, 3];
    var n = arr.length;
    printNGE(arr, n);


