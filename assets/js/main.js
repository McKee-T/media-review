var searchButton = document.getElementById('searchButton');
var input = document.getElementById('input');
var movieInfo = document.querySelector('.movieInfo');
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
  var listMovieInfo = document.createElement('li');
  var imgTaagg = document.createElement('img');
  imgTaagg.setAttribute("src",poster);
  listMovieInfo.textContent = title  +  year +  actors  +  director  +  writer  +  awards;
  movieInfo.appendChild(imgTaagg);
  movieInfo.appendChild(listMovieInfo);
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

document.addEventListener("DOMContentLoaded", function () {
  const watchlist = document.getElementById("watchlist");
  const itemInput = document.getElementById("item-input");
  const addItemButton = document.getElementById("add-item");

  // Retrieve watchlist from local storage
  const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  // Load saved items
  savedWatchlist.forEach((item) => {
    createWatchlistItem(item);
  });

  // Function to create a new watchlist item
  function createWatchlistItem(item) {
    const listItem = document.createElement("li");
    listItem.classList.add("collection-item");

    // Create item name from input
    const itemName = document.createElement("span");
    itemName.textContent = item.name;

    // Create input field for comments
    const commentsInput = document.createElement("input");
    commentsInput.type = "text";
    commentsInput.value = item.comments;
    commentsInput.placeholder = "Add comments";
    commentsInput.addEventListener("input", function () {
      item.comments = commentsInput.value;
      updateLocalStorage();
    });

    // Append item name and comments input to the list item
    listItem.appendChild(itemName);
    listItem.appendChild(commentsInput);

    // Append the list item to the watchlist
    watchlist.appendChild(listItem);
  }

  // Function to add a new item to the watchlist
  function addWatchlistItem() {
    const newItem = { name: itemInput.value, comments: "" };
    savedWatchlist.push(newItem);
    createWatchlistItem(newItem);
    updateLocalStorage();
    itemInput.value = ""; // Clear the input field after adding the item
  }

  // Update local storage with the current watchlist
  function updateLocalStorage() {
    localStorage.setItem("watchlist", JSON.stringify(savedWatchlist));
  }

  // Add event listeners
  addItemButton.addEventListener("click", addWatchlistItem);
});
