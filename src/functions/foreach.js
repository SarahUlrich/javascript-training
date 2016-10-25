var users = require('../data').users;

users.forEach(function(user){
   console.log('user name : ', user.name);
});

users.forEach(user => console.log('fat arrow user : ',user.name));

var admins = [];
var noAdmins = [];
users.forEach(function(user){
   if(user.admin){
       admins.push(user.name);
   }else{
       noAdmins.push(user.name);
   }
});

//users.forEach(user => user.admin ? admins.push(user.name) : noAdmins.push(user.name));

console.log('admins : ',admins, ' /// not admin : ', noAdmins);


