
function ok(v, x, c) {
    let n = v.length;

    // We already place it at the first
    // available slot i.e v[0](Greedy)
    let count = 1;
    let last = 0;
    for (let i = 0; i < n; i++) {
        if (v[i] - v[last] >= x) {
            last = i; //cow placed
            count++;
        }
        if (count >= c) {
            return true;
        }
    }
    return false;
}

function aggressive_cows(v, n, k) {

    let l = 0;
    let r = v[n - 1] - v[0];
    let ans = -1;

    // Applying Binary search
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (ok(v, mid, k)) {
            ans = mid;
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }

    return ans;
}

// Driver code
let K = 2;
let arr = [1, 2, 4, 8, 9];
let N = arr.length;

// Function call
let ans = aggressive_cows(arr, N, K);
console.log(ans);

