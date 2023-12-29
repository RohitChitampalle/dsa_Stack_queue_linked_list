function binarySearch(arr, left, right, key) {

    let mid =Math.floor((left + right)/2)
    while (right >= left ) {

        if (arr[mid] == key) {
            return mid
        }

        if (key > arr[mid]) {
            //recursive function
            return binarySearch(arr, mid + 1, right, key)
        } else {
            //recursion
            return binarySearch(arr, left, mid - 1, key)

        }

    }

    return -1


}

let arr = [2, 3, 4, 10, 40];
let x = 40;
let n = arr.length
let result = binarySearch(arr, 0, n-1, x);
(result == -1) ? console.log("Element is not present in array")
    : console.log("Element is present at index " + result);
