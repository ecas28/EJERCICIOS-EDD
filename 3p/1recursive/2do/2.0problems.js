// SERIES
// recursively
//
// 1. fibonacci
// -> n 
// <- 1,1,2,...,n
//
// call
// fibonacci(5) returns the 5 first numbers of the series

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

function fib(n){
    if (n < 2){ return n
    }
  return fib(n - 1) + fib(n - 2)
}
function power(b,p) {
  if(p === 1) {
    return p
  } else b * power(b, p - 1)
}
function factorial (n) {
   if (n == 0){
     return 1
     }
     if (n == 1) {//base case
        return n
    } else {
    
    return  n * factorial( n - 1)
    
    }
}
