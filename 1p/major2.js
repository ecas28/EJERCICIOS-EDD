console.log("mas de [n/2], ordenados")
var array = []
let random;

//generar núm aleatorios
 for(i = 0; i < 5; i++){
 random = Math.floor(Math.random() * 4);
 array.push(random);
 };

//Saber que número se repite int
const majority = (array = []) => {
   const threshold = Math.floor(array.length / 2);
   const map = {};
   for (let i = 0; i < array.length; i++) {
      const value = array[i];
      map[value] = map[value] + 1 || 1;
      if (map[value] > threshold)
         return value
   };
   return false;
};

//mostrar los núm ordenados
selectionSort(array);
//mostrar los números
console.log(array);
//mostrar el núm que se repite
console.log(majority(array));

//ordenar los núm int
function selectionSort(inputArray) { 
    let n = inputArray.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArray[j] < inputArray[min]) {
                min=j; 
              
            }
         }
         if (min != i) {
             let tmp = inputArray[i]; 
             inputArray[i] = inputArray[min];
             inputArray[min] = tmp;      
        }
   }
    return inputArray;
}
