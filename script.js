var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if( request.readyState === 4 && request.status === 200 ) {

    var jsonObj = JSON.parse(request.responseText);
    var array = [];
    var urls = [];

    for (var i = 0; i < jsonObj.data.children.length; i++) {
      array.push(jsonObj.data.children[i].data.title);
      urls.push('https://reddit.com' + jsonObj.data.children[i].data.permalink);
    }
    for(var j = 0; j < array.length; j++) {
      $('ul').append('<li>');
      $('li').eq(j).append('<a href=' + urls[j] + '>');
      $('a').eq(j).text( array[j] );
    }
  }
};

request.open('GET', 'https://www.reddit.com/r/starwars.json');

request.send();
