/*var x = [0,3,5,6,10,12,-12,45,34];

console.log('first : ', x[0]);

x[2] = -42; //modification de la 3eme valeur du tableau

// deviation
x[-2] = "what ???";
console.log('found : ',x[-2]);

console.log('all table', x);
x[150] = 149;
console.log('big table now : ', x);

 on recommence en plus sérieux*/

var x = [0,3,5,6,10,12,-12,45,34];

x.sort();
console.log('x sorted : ',x);

x.sort(function(a,b){
    if(a<b){
        return -1;
    }else if(a>b){
        return 1;
    }
    return 0;
});

console.log('x correctly sorted : ',x);

var sortFunction = (a,b) => a<b ? -1 : 1;
x.sort(sortFunction);
console.log('ES 2015 sorted : ', x);

var filtered = x.filter(function(number){
    return number >= 0;
});

console.log('filtered x : ', filtered);

var FAfiltered = (a) => a>0;
console.log(x.filter(FAfiltered));

direct = x.filter(number => number >=0);

//add last element
x.push(50);
//x[x.length+1]=50;
console.log(x);

//remove last element
var lastElement = x.pop();
//x.splice(x.length-1);
console.log(x);

//remove first element
var first = x.shift();
console.log('first was : ', first, x);

//add first element
x.unshift(first);
console.log('first is ', first, 'again', x);



