'use strict';

// Parse Query String
function parseQueryString(url){
  var answer = {};
  var where = url.indexOf('?') + 1;
  var str = url.slice(where);
  var pairs = str.split('&');
  for ( var pair in pairs ){
    var values = (pairs[pair]).split('=');
    var key = values[0];
    var value = values[1];
    answer[key] = value;
  }
  console.log(answer);
  return answer;
}
