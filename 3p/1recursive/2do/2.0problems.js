// SERIES
// recursively
//

// 2. power
// -> b base
// -> p power
// <- b*b*...b (p times)
//
// call
// power(2,3) returns 8

// 3. factorial
// -> n
// <- 2*3*...*n
//
// call
// factorial(3) returns 6


// 1. fibonacci
// -> n 
// <- 1,1,2,...,n
//
// call
// fibonacci(5) returns the 5 first numbers of the series
function fibonacci(n){
  if (n<2) return n
  return fibonacci(n-2)+fibonacci(n-1)
}

function power(b,p) {
  if(p === 1) {
    return p
  } else b * power(b, p - 1)
}

function factorial (n) {
   if (n == 0){
     return 1
     }
     if (n == 1) {
        return n
    } else {
    
    return  n * factorial( n - 1)
    
    }
}

console.log((fibonacci(5))
console.log((power(8))
console.factorial((factorial(6))
