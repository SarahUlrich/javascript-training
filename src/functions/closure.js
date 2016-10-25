var denver = {
    name : 'Denver',
    age : 12
};

var petitPied = {
    name : 'Petit Pied',
    age : -65000000
};

function pure(a,b){
    // a.age = 15; not pure
    return a.age + b.age; // pure : for some input, will always return a value
};

console.log('pure : ', pure(denver, petitPied));

function unpure(){
    //console.Log ou screen() : will modify a stream
    //capture the external petitPied object
    //depends on external context, and not only params
    console.log('kick' +petitPied.name);
 };

 unpure();