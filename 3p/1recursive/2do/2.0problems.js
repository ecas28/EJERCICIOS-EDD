// SERIES
// recursively
//

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

// 2. power
// -> b base
// -> p power
// <- b*b*...b (p times)
//
// call
// power(2,3) returns 8

function power(r,n) {
  
    if (n == 0){
     return 1
     }
     if (n == 1) {//base case
        return r
        
    } else {
    
    return  r * power(r, n - 1)
    
    }

}

// 3. factorial
// -> n
// <- 2*3*...*n
//
// call
// factorial(3) returns 6

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

//resultados de todo 
console.log(fibonacci(5))
console.log(power(8,7))
console.log(factorial(6))
