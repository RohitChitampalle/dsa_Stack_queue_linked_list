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