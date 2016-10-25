var x = {};
console.log('x ; ', x, typeof x);

var john = {
    name : 'John',
    address : 'London',
    friend : {
        name : 'Jim',
        age : 12
    }
};

console.log(john.address);
console.log(john.friend.name);


var funkyCop = {
    name : 'Robocop'
};

var ennemy = {
    name : 'Dick'
};

funkyCop.foe = ennemy;
console.log('funck', funkyCop);
ennemy.foe = funkyCop;
funkyCop.name = "Venere Robocop";

ennemy.dead = true;
delete funkyCop.foe;

console.log('funky now : ', funkyCop);

var strange = {
    'Azjda/°kk': "strange key"
};

console.log('strange : ', strange['Azjda/°kk']);
console.log('normal : ', funkyCop.name, funkyCop['name']);
