// une fonction est disponible quelque soit son emplacement dans le fichier
function add(a,b){
    return a+b;
};

console.log('2 + 3 : ' ,add(2,3));

// la variable n'est disponible qu'au moment de sa lecture
var mult = function(a,b){
    return a*b;
};

console.log('4 * 3 : ',mult(4,3));

var divide = (a, b) => a/b;

console.log('10 / 5 : ' ,divide(10,5));

