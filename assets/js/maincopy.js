var searchButton = document.getElementById('searchButton');
var input = document.getElementById('input');


function omdbApi (){
  event.preventDefault();
  var requestURL = "https://www.omdbapi.com/?t="+input.value+"&apikey=3c53385a&"
  // var requestPoster = "https://img.omdbapi.com/?apikey=3c53385a&"
  fetch(requestURL)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
  })
  var title = data.Title;
  var year = data.Year;
  var actors = data.Actors;
  var director = data.Director;
  var writer = data.Writer;
  var awards = data.Awards;
  var listMovieInfo = document.createElement('li');
  listMovieInfo.textContent = title +"<br>" + year+"<br>" + actors+"<br>" + director+"<br>" + writer+"<br>" + awards;
  body.innerHTML.appendChild(listMovieInfo);



};

searchButton.addEventListener("click", omdbApi);
// input.addEventListener("input");