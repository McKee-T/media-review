var searchButton = document.getElementById('searchButton');
var input = document.getElementById('input');
var title = document.querySelector(".title");
var resultsList = document.getElementById("results");

function omdbApi() {
  event.preventDefault();
  var requestURL = "https://www.omdbapi.com/?t=" + input.value + "&apikey=3c53385a&"
  // var requestPoster = "https://img.omdbapi.com/?apikey=3c53385a&"
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      title.textContent = data.Title;

    })

  // var year = data.Year;
  // var actors = data.Actors;
  // var director = data.Director;
  // var writer = data.Writer;
  // var awards = data.Awards;
  // var listMovieInfo = document.createElement('li');
  // listMovieInfo.textContent = title +"<br>" + year+"<br>" + actors+"<br>" + director+"<br>" + writer+"<br>" + awards;
  // innerHTML.appendChild(listMovieInfo);

};

searchButton.addEventListener("click", omdbApi);
// input.addEventListener("input");

const userInput = document.querySelector('input');
const btn = document.querySelector('button');
var album = document.querySelector(".album");
var cover = document.querySelector(".cover");
async function getMusic(soundtrack) {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${soundtrack}&type=albums&offset=0&limit=3&numberOfTopResults=5`;
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
    // const spotifyLink = document.getElementById("spotify-link");
    // spotifyLink.href = album;
    // spotifyLink.textContent = "Listen to the Soundtrack on Spotify:";

    console.log(album.textContext);
    console.log(cover.src);
    // return result;
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener("click", function () {
  const music = userInput.value;
  getMusic(music);
});

// getMusic(userInput);
// getMusic(userInput);
// function handleButtonClick(event){
//   event.preventDefault();

//   if (event.target.matches('button')){
//     event.target.getAttribute(".album");

//     getMusic(album);
//     console.log(getMusic);
//     console.log("this button worked");
//   }
// }
// fetch(url)// promise based
//       .then(function (response) {
//           return response.json(); // parse the response data
//       })
//       .then(function (data) { // data should be an array or an object
//           console.log(data);
//       })

//  catch (error) {
//   console.error(error);
// }
// console.log("connected test is good.");


// cityForm.addEventListener("submit", captureCity);

// function addComment() {
//   const commentInput = document.getElementById("comment-input");
//   const commentText = commentInput.value.trim();
//   if (commentText !== "") {
//     const commentList = document.getElementById("comment-list");
//     const listItem = document.createElement("li");
//     listItem.className = "collection-item";
//     listItem.textContent = commentText;
//     commentList.appendChild(listItem);
//     commentInput.value = ""; // Clear the input field after adding a comment
//   }}