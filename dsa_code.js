let binary_search = (arr, x, n) => {
	let left = 0;
	let right = n;
	let mid;

	while (right >= left) {

		///to find mid element index
		mid = left + Math.floor((right - left) / 2)


		//if the element is eqal to mid element 
		if (x == arr[mid]) {
			return mid
		}
 
		// if the elementv is greater then key 
		if (arr[mid] > x ) {
			right = mid - 1
		} else {
			left = mid + 1
			
		}

	}

	//if not exits then return -1 
	return -1

}

let arr = new Array(2, 3, 4, 10, 40);
let x = 10;
let n = arr.length;
let result = binary_search(arr, x, n);
console.log(result)