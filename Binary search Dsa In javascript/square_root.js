
	function squareRoot(number,precision)
	{
        let start=0,end=number
		let mid;

		// variable to store the answer
		let ans = 0.0;

		// for computing integral part
		// of square root of number
		while (start <= end) 
		{
			mid = (start + end) / 2;
			
			if (mid * mid == number) 
			{
				ans = mid;
				break;
			}

			// incrementing start if integral
			// part lies on right side of the mid
			if (mid * mid < number) {
				start = mid + 1;
				ans = mid;
                // squareRoot(number, start+1, end, precision)
			}

			// decrementing end if integral part
			// lies on the left side of the mid
			else {
				end = mid - 1;
                // squareRoot(number, start, end - 1, precision)

			}
		}

		// For computing the fractional part
		// of square root upto given precision
		let increment = 0.1;
		for (let i = 0; i < precision; i++) {
			while (ans * ans <= number) {
				ans += increment;
			}

			// loop terminates when ans * ans > number
			ans = ans - increment;
			increment = increment / 10;
		}
		return ans;
	}

// Driver code

		// Function calling
console.log(squareRoot(50, 3));


