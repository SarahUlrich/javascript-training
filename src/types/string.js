var string = "Hello World";

string += " !";

console.log('string : ', string);

var index = string.indexOf('lo');
console.log('index of lo : ', index);

var index = string.indexOf('jo');
console.log('index of jo : ', index);

function contains(haystack, needle){
    if(haystack.indexOf(needle)==-1){
        return false;
    }else{
        return true;
    }
}

//return (haystack.indexOf(needle)>=0;

var  isTrue = contains('Jack', 'ack');
var isFalse = contains('Mac Donalds', 'ack');
var isAlsoTrue = contains('Jim', 'Jim');

console.log(isTrue, isFalse, isAlsoTrue);

console.log('Jack is back'.includes('ack')); //que depuis ES2015


/**
 * Expression Reguliere
 */

var hello = "Hello World";
var found = hello.search(/orl/);
var alsoFound = hello.search(/world/i);  // /i = case insensitive
console.log('found : ', found, 'also : ', alsoFound);

var x = /(.)*(world)/i.test('Hello World');
console.log('x : ', x);

var y = /(.)*(world)/i.test('Hello World here');
console.log('y : ', y);
//true : contient au moins la string de base

var z = /(.)*(world)$/i.test('Hello World here');
console.log('z : ', z);
//false avec l'ajout du $ : contient strictement la string de base à la fin

//Substring

//substr

var test = "utilisation";

// substr from char number 3 with a length of 5 char
console.log(test.substr(3, 5));


// substring from char number 5 to char number 8
console.log(test.substring(5, 8));