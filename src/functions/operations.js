function add(a,b) {
    return a+b;
};

function divide(a,b){
    if(b!==0){
        return a/b;
    }
};

function multiply(a,b){
    return a*b;
};

var minus = function(a,b){
    return a-b;
};

console.log('a=2 et b=6 : ' , 'a+b = ', add(2,6) ,',a/b = ', divide(2,6),',a*b = ',multiply(2,6),',a-b = ', minus(2,6));

function operation(op, x, y){
    return op(x,y);
};

console.log('add ', operation(add, 56 ,59));
console.log('divide ', operation(divide, 56 ,59));
console.log('multiply ', operation(multiply, 56 ,59));
console.log('minus ', operation(minus, 56 ,59));

var ops = [add, divide, multiply, minus];
var random = ops[Math.floor(Math.random()*ops.length)];
console.log(random.name, operation(random,56,59));

var data = [4,3];

data.operation = function(op){
    return op(this[0], this[1]);
};
console.log(data.operation(multiply));
