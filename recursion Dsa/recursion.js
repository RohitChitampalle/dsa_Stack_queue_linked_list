//! counting recurion
// let counting =(n)=>{

//     if(n==0){
//         return 
//     }
    
//     counting(n-1)
//     console.log(n)


// }

// counting(5)

//! factorial function
// function factorial (n){
    
//     if(n == 1){
//         return 1
//     }

//     return n*factorial(n-1)


// }

// let result=factorial(5);
// console.log(`Factorial of 5! is equal to  `,result)

//! fibonacci recursion

// function fibonachhi(n){

//     if(n ==0 || n==1){
//         return n
//     }

//     return fibonachhi(n-1) + fibonachhi(n-2)
// }

// let n=8
// let fibonachhiResult=fibonachhi(n)

// console.log(`The give number ${n} fibonachhi is `,fibonachhiResult)

//! exponent of the number
// function exponent(n){
//     if (n == 0){
//         return 1
//     }

//     let ans=exponent(n/2)
//     if (n & 1){
//         return 2 * ans * ans
//     }else{
//         return ans * ans
//     }
//     // let ans = 2 * exponent(n -1)

//     // return ans
// }

// let result=exponent(5)
// console.log(result)

let check_Sorted=(n,arr)=>{

    if (n>=arr.length){
        return true
    }
    if(arr[n]<arr[n-1]){
        return false
    }
    
    return   check_Sorted(n+1,arr)
       

    
}
let n=0
let arr=[1,2,3,4,5]
let result=check_Sorted(n,arr)
console.log(result)