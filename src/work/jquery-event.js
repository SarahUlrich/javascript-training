/*const contents=search('it');
 contents.forEach(function(content){
 const node = document.createTextNode(content);
 document.querySelector('body').appendChild(node);
 });*/


function displaySearch(term){
    clearSearch();
    var contents = search(term);

    console.log(contents.join(' '));

    contents.forEach(function(content){
        const pElement = $('<p>').text(content);
        $('section.search').append(pElement);
    });
};

function displaySearchValue(){
    displaySearch($('input.search').val());
};

function clearSearch(){
    $('section.search').empty();
};

$('button').on('click', displaySearchValue);
/*const term=$('input.search');
 console.log('term', term, term.val());
 displaySearch(term.val());*/
//displaySearch();

function displayUsers(users){
    const block = $('<ul>');
    users.forEach(function(user){
        const uElement = $('<li>').text(user.name);
        block.append(uElement);
    });
    $('section.users').append(block);
};



