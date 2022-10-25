var array = [];
var n = 10000
var pasos = 0
console.time('Tiempo ')
function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
              
            }
         }
         if (min != i) {
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        pasos++}
   }
    return inputArr;
}

let random;
 for(i = 0; i < n; i++){
 random = Math.floor(Math.random() * 10000);
 array.push(random);
 };

//console.log(array);
selectionSort(array);
console.log(array);
console.log('Numero de pasos:',pasos);
console.timeEnd('Tiempo ')