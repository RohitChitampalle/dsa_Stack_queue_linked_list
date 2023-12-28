function median(matrix, R, C) {
    let mi = Number.MAX_SAFE_INTEGER;
    let mx = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < R; i++) {
        mi = Math.min(mi, matrix[i][0]);
        mx = Math.max(mx, matrix[i][C - 1]);
    }

    let ans;   //Initialize a variable ans to store the final median
    while (mi <= mx) {
        const mid = mi + Math.floor((mx - mi) / 2);
        let cnt = 0;

        for (let i = 0; i < R; i++) {

            //Iterate through each row and use the upperBound function to count the number of elements less than or equal to mid.

            cnt += upperBound(matrix[i], mid);
        }

        if (cnt >= (R * C + 1) / 2) {
            ans = mid;
            mx = mid - 1;
        } else {
            mi = mid + 1;
        }
    }

    return ans;
}

// upperBound function is a binary search function that finds the index of the first 
// element greater than target in a sorted array.
function upperBound(arr, target) {
    let low = 0;
    let high = arr.length;

    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);

        if (arr[mid] <= target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}

var r = 3, c = 3;
var m = [[1, 3, 4],
[2, 5, 6],
[7, 8, 9]]


let result = median(m, r, c)
console.log(result)
