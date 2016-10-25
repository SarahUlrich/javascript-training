var topics = require('../data').topics;

var fromLeo = [];

var result = topics.filter(function(topic){
   ///returns true if we keep this topic
        return (topic.user.name === 'Leonard')
});

console.log(result);

console.log('===============================================================');

var leofat = topics.filter(topic => topic.user.name === 'Leonard');
console.log(leofat);

console.log('===============================================================');

var titles = topics.map(function(topic){
   return topic.title;
});
console.log('titles : ', titles);

console.log('===============================================================');

var titlefat = topics.map(topic => topic.title);
console.log('fat titles : ',titlefat);

console.log('===============================================================');

var violence = topics.some(function(topic){
    return topic.tags.includes('violence')
});

console.log(violence);

console.log('===============================================================');

var fromSheldon = topics.filter(function(topic){
   return topic.comments.some(function(comment){
       return comment.user.name === 'Sheldon';
   })
});

console.log(fromSheldon.map(topic=>topic.title));

console.log('===============================================================');

var fatSheldon = topics.filter(topic => topic.comments.some(comment => comment.user.name === 'Sheldon')).map(topic=>topic.title);

console.log(fatSheldon);

console.log('===============================================================');


var fromPenny = [];

topics.forEach(function(topic){
    return topic.comments.forEach(function(comment){
        if(comment.user.name === 'Penny'){
            fromPenny.push(comment.id);
        };
    });
});

var sortFunction = (a,b) => a<b ? -1 : 1;
fromPenny.sort(sortFunction);
console.log(fromPenny);

console.log('===============================================================');

var contentVio = [];

topics.forEach(function(topic){
    return topic.comments.forEach(function(comment){
        if(comment.tags !== undefined ){
            if(comment.tags.includes('violence') && !comment.user.admin){
                contentVio.push(comment.content);
            }
        }
    })
});

console.log(contentVio);

console.log('===============================================================');

var searched = [];
function search(term) {
    topics.forEach(function (topic) {
        topic.comments.forEach(function (comment) {
            if (comment.content.toLowerCase().includes(term.toLowerCase())) {
                searched.push(comment.content);
            }
        })
    });
    return searched;
}

console.log('search is present in :', search('it'));