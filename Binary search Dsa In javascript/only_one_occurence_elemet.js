function search(arr, low, high) {

    // Base cases
    if (low > high)
        return;

    if (low == high) {
        console.log("The required element is " + arr[low]);
        return;
    }

    // Find the middle point
    var mid = Math.floor((low + high) / 2);

    // If mid is even and element next to mid is
    // same as mid, then output element lies on
    // right side, else on left side
    if (mid % 2 == 0) {
        if (arr[mid] == arr[mid + 1])
            search(arr, mid + 2, high);
        else
            search(arr, low, mid);
    }

    // If mid is odd
    else {
        if (arr[mid] == arr[mid - 1])
            search(arr, mid + 1, high);
        else
            search(arr, low, mid - 1);
    }
}

// Driver Code
var arr = [1, 1, 2, 4, 4, 5, 5, 6, 6];
var len = arr.length;

search(arr, 0, len - 1)
