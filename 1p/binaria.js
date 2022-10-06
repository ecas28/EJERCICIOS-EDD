console.log("10e3,10e4,10e5, ordenados, tomar/mostrar pasos")

var array = [];
let num;
let x = 0;

for(i = 0; i < 10000; i++){
num = Math.floor(Math.random() * 10000);
array.push(num);
};

function fun(a,b){return a-b}

binarySearch = function(item){
array.sort(fun); 
var low = 0, 
high = array.length - 1, 
mid, element;
while (low <= high){ 
mid = Math.floor((low + high) / 2); 
element = array[mid];

if (element < item) { 
low = mid + 1;
} else if (element > item) { 

high = mid - 1; 
} else {
return mid;
} 
  x++; //contar pasos
}
  
};

//funcion
console.log(array.sort(fun));
//busqueda
console.log(binarySearch(0));
//mostrar los pasos
console.log('Pasos:', x)