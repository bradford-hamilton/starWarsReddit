var request3 = new XMLHttpRequest();

request3.onreadystatechange = function() {
  if( this.readyState === 4 && this.status === 200 ) {

    var jsonObj = JSON.parse(this.responseText);
    var array = [];
    var urls = [];
    var thumbnails = [];

    for (var i = 0; i < jsonObj.data.children.length; i++) {
      array.push( jsonObj.data.children[i].data.title );
      urls.push( 'https://reddit.com' + jsonObj.data.children[i].data.permalink );
      thumbnails.push( jsonObj.data.children[i].data.thumbnail );
    }
    for(var j = 0; j < array.length; j++) {
      $('ul').append('<li>');
      $('li').eq(j).append( '<img src=' + "'" + thumbnails[j] + "'" + '>');
      $('li').eq(j).append('<a href=' + "'" + urls[j] + "'" + '>');
      $('a').eq(j).text( array[j] );
    }
  }
};

request3.open('GET', 'https://www.reddit.com/r/starwars.json');
request3.send();
