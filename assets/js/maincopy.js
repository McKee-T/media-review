var searchButton = document.getElementById('searchButton');
var input = document.getElementById('input');
var movieInfo = document.getElementById('list');
var moviePoster = document.querySelector('.moviePoster');
var title = document.querySelector(".title");
var resultsList = document.getElementById("results");

function omdbApi() {
  event.preventDefault();
  var requestURL = "https://www.omdbapi.com/?t=" + input.value + "&apikey=3c53385a&"
  fetch(requestURL)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
  var title = data.Title;
  var poster = data.Poster;
  var year = data.Year;
  var actors = data.Actors;
  var director = data.Director;
  var writer = data.Writer;
  var awards = data.Awards;
  var imgTaagg = document.createElement('img');
  var titleLi = document.createElement("li");
  var yearLi = document.createElement("li");
  var actorLi = document.createElement("li");
  var directorLi = document.createElement("li");
  var writerLi = document.createElement("li");
  var awardsLi = document.createElement("li");
  titleLi.textContent = title;
  yearLi.textContent = year;
  actorLi.textContent = "Actors: " + actors;
  directorLi.textContent =" Director: " + director;
  writerLi.textContent =" Writers: "+writer;
  awardsLi.textContent =" Awards: "+ awards;
  imgTaagg.setAttribute("src",poster);
  imgTaagg.setAttribute("class", "moviePoster");
  titleLi.setAttribute("class","movieInfo");
  yearLi.setAttribute("class","movieInfo");
  actorLi.setAttribute("class","movieInfo");
  directorLi.setAttribute("class","movieInfo");
  writerLi.setAttribute("class","movieInfo");
  awardsLi.setAttribute("class","movieInfo");
  movieInfo.appendChild(imgTaagg);
  movieInfo.appendChild(titleLi);
  movieInfo.appendChild(yearLi);
  movieInfo.appendChild(actorLi);
  movieInfo.appendChild(directorLi);
  movieInfo.appendChild(writerLi);
  movieInfo.appendChild(awardsLi);
})
};

searchButton.addEventListener("click", omdbApi);


const userInput = document.querySelector('input');
const btn = document.querySelector('button');
var album = document.querySelector(".album");
var cover = document.querySelector(".cover");
async function getMusic(soundtrack) {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${soundtrack}+soundtrack&type=albums&offset=0&limit=3&numberOfTopResults=5`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f3fb0440b4msh682c2c923345172p1a9677jsn0e62cb010957',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  try {
    resultsList.innerHTML = "";
    const response = await fetch(url, options);
    const result = await response.json();
    console.log((result));
    var albumItems = result.albums.items;
    for (var i = 0; i < albumItems.length; i++) {

      var anchorTag = document.createElement("a");
      var imageTag = document.createElement("img");
      var image = albumItems[i].data.coverArt.sources[0].url;
      var albumUri = albumItems[i].data.uri;
      anchorTag.setAttribute("href", albumUri);
      anchorTag.setAttribute("title", "album link");
      imageTag.setAttribute("src", image);
      resultsList.appendChild(anchorTag);
      anchorTag.appendChild(imageTag);
    }
    console.log(album.textContext);
    console.log(cover.src);
   
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener("click", function () {
  const music = input.value;
  getMusic(music);
});

