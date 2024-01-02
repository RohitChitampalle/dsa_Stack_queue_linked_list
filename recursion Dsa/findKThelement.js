function kth(arr1, m, arr2, n, k) {

	if (k > (m + n) || k < 1) { // if k is greater then  length of the two array
		return -1;
	}
	// let m <= n
	if (m > n) {
		return kth(arr2, n, arr1, m, k);  //changing the array with length
	}

	// Check if arr1 is empty returning 
	// k-th element of arr2
	if (m == 0) {
		return arr2[k - 1];
	}

	// Check if k = 1 return minimum of 
	// first two elements of both
	// arrays

	if (k == 1) {
		return Math.min(arr1[0], arr2[0]);
	}

	// Now the divide and conquer part
	let i = Math.min(m, parseInt(k / 2));
	let j = Math.min(n, parseInt(k / 2));

	if (arr1[i - 1] > arr2[j - 1]) {

		// Now we need to find only 
		// k-j th element since we
		// have found out the lowest j
		let temp = arr2.slice(j, n)
		return kth(arr1, m, temp, n - j, k - j);
	}
	else {

		// Now we need to find only
		// k-i th element since we
		// have found out the lowest i
		let temp = arr1.slice(i, m)
		return kth(temp, m - i, arr2, n, k - i);
	}
}

// Driver code

let arr1 = [2, 3, 6, 7, 9];
let arr2 = [1, 4, 8, 10];
let arr1_length = 5;
let arr2_length = 4;
let k = 5;

let ans = kth(arr1, arr1_length, arr2, arr2_length, k);

if (ans == -1) {
	console.log("Invalid query");
}
else {
	console.log(ans);
}


