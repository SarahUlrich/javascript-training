$.get('http://localhost:3000/api/users/', function(users){
    console.log('receive users data', users);
    console.log(users.sort(function(user1, user2){
        //users.sort((user1, user2) => user1.name < user2.name ? -1 : 1);
        if(user1.name === user2.name){
            return 0;
        }
        return user1.name < user2.name ? -1 : 1;
    }));
    displayUsers(users);
});

$.get('http://localhost:3000/api/users/admins', function(admins){
    console.log('receive admins data', admins.map(admin => admin.name));
});


