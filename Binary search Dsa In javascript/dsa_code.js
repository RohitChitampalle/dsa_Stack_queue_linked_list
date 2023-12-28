// let binary_search = (arr, x, n) => {
// 	let left = 0;
// 	let right = n;
// 	let mid;

// 	while (right >= left) {

		//to find mid element index
// 		mid = left + Math.floor((right - left) / 2)


		//if the element is eqal to mid element
// 		if (x == arr[mid]) {
// 			return mid
// 		}

		// if the elementv is greater then key
// 		if (arr[mid] > x ) {
// 			right = mid - 1
// 		} else {
// 			left = mid + 1

// 		}

// 	}

	//if not exits then return -1
// 	return -1

// }

// let arr = new Array(2, 3, 4, 10, 40);
// let x = 10;
// let n = arr.length;
// let result = binary_search(arr, x, n);
// console.log(result)


//!squareRoot Using Binary search ...
// function squareRoot(number, precision) {
// 	let start = 0, end = number;
// 	let mid;

// 	// variable to store the answer
// 	let ans = 0.0;

// 	// for computing integral part
// 	// of square root of number
// 	while (start <= end) {
// 		mid = (start + end) / 2;

// 		if (mid * mid == number) {
// 			ans = mid;
// 			break;
// 		}

// 		// incrementing start if integral
// 		// part lies on right side of the mid
// 		if (mid * mid < number) {
// 			start = mid + 1;
// 			ans = mid;
// 		}

// 		// decrementing end if integral part
// 		// lies on the left side of the mid
// 		else {
// 			end = mid - 1;
// 		}
// 	}

// 	// For computing the fractional part
// 	// of square root upto given precision
// 	let increment = 0.1;
// 	for (let i = 0; i < precision; i++) {
// 		while (ans * ans <= number) {
// 			ans += increment;
// 		}

// 		// loop terminates when ans * ans > numberprecisio
// 		ans = ans - increment;
// 		increment = increment / 10;
// 	}
// 	return ans;
// }


// console.log((squareRoot(50, 3)))


//! check number in rotated array
// function search(arr, l, h, key){
// 	if (l > h)
// 		return -1;

// 	let mid = Math.floor((l + h) / 2);
// 	if (arr[mid] == key)
// 		return mid;

// 	/* If arr[l...mid] is sorted */
// 	if (arr[l] <= arr[mid]) {
// 		/* As this subarray is sorted, we can quickly
// 		check if key lies in half or other half */
// 		if (key >= arr[l] && key <= arr[mid])
// 			return search(arr, l, mid - 1, key);
// 		/*If key not lies in first half subarray, 
// 		Divide other half into two subarrays,
// 		such that we can quickly check if key lies 
// 		in other half */
// 		return search(arr, mid + 1, h, key);
// 	}

// 	/* If arr[l..mid] first subarray is not sorted, 
// 	then arr[mid... h]
// 	must be sorted subarray */
// 	if (key >= arr[mid] && key <= arr[h])
// 		return search(arr, mid + 1, h, key);

// 	return search(arr, l, mid - 1, key);
// }

// // Driver program
// let arr = [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ];
// let n = arr.length;
// let key = 3;
// let i = search(arr, 0, n - 1, key);
// if (i != -1)
// 	console.log("Index: " +i +"\n");
// else
// 	console.log("Key not found");
	

// 	function search( arr, low, high)
// 	{

// 	// Base cases
// 	if (low > high)
// 	return;
  
// 	if (low == high) {
// 		console.log("The required element is " + arr[low]);
// 	return;
// 	}

// 	// Find the middle point
// 	var mid = Math.floor((low + high) / 2);

// 	// If mid is even and element next to mid is
// 	// same as mid, then output element lies on
// 	// right side, else on left side
// 	if (mid % 2 == 0) {
// 		if (arr[mid] == arr[mid + 1])
// 	search(arr, mid + 2, high);
// 	else
// 	search(arr, low, mid);
// 	}

// 	// If mid is odd
// 	else {
// 		if (arr[mid] == arr[mid - 1])
// 	search(arr, mid + 1, high);
// 	else
// 	search(arr, low, mid - 1);
// 	}
// }

// 	// Driver Code
// var arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8];
// 	var len = arr.length;

// search(arr, 0, len - 1)



