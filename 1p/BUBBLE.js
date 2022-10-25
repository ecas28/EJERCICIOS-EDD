var array = [];
var n = 10000;
var pasos = 0;
console.time('Tiempo ')

function bubbleSort(items) {
    var length = items.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                   if(items[j] > items[j+1]) {
                           var tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp;
                     pasos++;
            }
        }        
    }
}

let random;
 for(i = 0; i < n; i++){
 random = Math.floor(Math.random() * 10000);
 array.push(random);
 };

//console.log(array);
bubbleSort(array);
console.log(array);
console.log("Pasos: " +pasos);
console.timeEnd('Tiempo ')