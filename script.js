$(document).ready(function() {
  //jquery get request to index.html
  $.get('index.html', function(data) {
    console.log( data );
  })
  //jquery get request
  $.get('data.json', function(data) {
    console.log(data);
  })
  //jquery get request third party - reddit
  $.get('https://www.reddit.com/r/starwars.json', function(data) {
    var posts = [];
    var urls = [];
    var thumbnails = [];
    var comments = [];
    var len = data.data.children.length;
    //loop through each post
    for (var i = 0; i < len; i++) {
      //push data to arrays
      posts.push( data.data.children[i].data.title );
      urls.push( 'https://reddit.com' + data.data.children[i].data.permalink );
      thumbnails.push( data.data.children[i].data.thumbnail );
      comments.push( data.data.children[i].data.num_comments );
      //append data to webpage
      $('ul').append('<li>');
      $('li').eq(i).append( i + '.' );
      $('li').eq(i).append('<img src=' + "'" + thumbnails[i] + "'" + '>');
      $('li').eq(i).append('<a href=' + "'" + urls[i] + "'" + '>');
      $('a').eq(i).text( posts[i] );
      $('li').eq(i).append( '<p>' + comments[i] + ' comments' + '</p>' )
    }
  });
});




//using XMLHttpRequest below for my own reference

// var request3 = new XMLHttpRequest();
//
// request3.onreadystatechange = function() {
//   if( this.readyState === 4 && this.status === 200 ) {
//
//     var jsonObj = JSON.parse(this.responseText);
//     var array = [];
//     var urls = [];
//     var thumbnails = [];
//
//     for (var i = 0; i < jsonObj.data.children.length; i++) {
//       array.push( jsonObj.data.children[i].data.title );
//       urls.push( 'https://reddit.com' + jsonObj.data.children[i].data.permalink );
//       thumbnails.push( jsonObj.data.children[i].data.thumbnail );
//     }
//     for(var j = 0; j < array.length; j++) {
//       $('ul').append('<li>');
//       $('li').eq(j).append( '<img src=' + "'" + thumbnails[j] + "'" + '>');
//       $('li').eq(j).append('<a href=' + "'" + urls[j] + "'" + '>');
//       $('a').eq(j).text( array[j] );
//     }
//   }
// };
//
// request3.open('GET', 'https://www.reddit.com/r/starwars.json');
// request3.send();
