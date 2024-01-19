//! left half pyramid pattern code 
// *
// **
// ***
// ****
// *****

// let star=""

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         star+=" * "
//     }
//     star += "\n"
// }
// console.log(star)

//!left invert half pyramid pattern code 
// *****
// ****
// ***
// **
// *

// let star = ""

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         star += "*"
//     }
//     star += "\n"
// }
// console.log(star.split('').reverse().join(''))

//!right  half pyramid pattern code 
//     *
//    **
//   ***
//  ****
// *****

// ?------and--------

//! full pyramid 
//     *
//    ***
//   *****
//  *******
// *********


let star = ""

// console.log(star)

//!right invert half pyramid pattern code 

// *****
//  ****
//   ***
//    **
//     *

//? -----and -----
//! full invert pyramid
// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     *
// let star = ""

for (let i = 1; i < 5; i++) {
    // star += " ";

        for (let j = 0; j <  i-1; j++) {
            star += " ";
        }
        for (let k = 0; k < 5-i+1; k++) {
            star += "* ";
        }
        // printing star
        star += "\n";
        
    }
    
    for (let i = 1; i <= 5; i++) {
    
        for (let j = 0; j < 5 - i; j++) {
            star += " ";
        }
        for (let k = 0; k < i; k++) {
            star += "* ";
        }
        // printing star
        star += "\n";
    
    }

console.log(star)
//! alphabets pattern
// let n = 5; // you can take input from prompt or change the value
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//     // printing characters
//     for (let j = 0; j < i; j++) {
//         string += String.fromCharCode(j + 65);
//     }
//     string += "\n";
// }
// console.log(string);

//! number pattern

// let n = 4; // height of pattern
// let string = "";
// let count = 1;
// // External loop
// for (let i = 1; i <= n; i++) {
//     // Internal loop
//     for (let j = 1; j <= i; j++) {
//         string += count + " ";
//         count++;
//     }
//     string += "\n";
// }
// console.log(string);












// let star=""
// let n=5

// for (let index = 1; index <= n; index++) {

//     for(let j=0;j<n-index;j++){
//         star+=" "
//     }
//     for(let k=0;k<index;k++){
//         star+="*"
//     }
//     star+="\n"
// }

// console.log(star)