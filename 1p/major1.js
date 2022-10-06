console.log("mas de [n/2], sin ordenar (fuerza bruta)")
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

//mostrar los números
console.log(array);
//mostrar el núm que se repite
console.log(majority(array));
