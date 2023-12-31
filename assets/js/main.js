var searchButton = document.getElementById('searchButton');
var input = document.getElementById('input');
var movieInfo = document.getElementById('list');
var moviePoster = document.querySelector('.moviePoster');
var title = document.querySelector(".title");
var resultsList = document.getElementById("results");
var clickMessage = document.querySelector(".soundtrack-text");
const errorMessageElement = document.getElementById('errorMessage');
const errorModal = document.querySelector('.modal');

// Hides modal when site loads
errorModal.style.display = 'none';

function omdbApi() {
  movieInfo.innerHTML = "";
  event.preventDefault();
  var requestURL = "https://www.omdbapi.com/?t=" + input.value + "&apikey=3c53385a&"
  fetch(requestURL)
    .then(function (response) {
      if (!response.ok) {
        // Display error in the modal
        errorModal.style.display = 'block';
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      if (data.Response === "False") {
        // Handle the case where the movie data is not available
        console.log('Error: Movie data not available');
        errorModal.style.display = 'block';
        searchButton.style.display = 'none';
      } else {
        // Movie data is available, proceed with displaying information
      }
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
      yearLi.textContent = " - " + year;
      actorLi.textContent = "Actors: " + actors;
      directorLi.textContent = " Director: " + director;
      writerLi.textContent = " Writers: " + writer;
      awardsLi.textContent = " Awards: " + awards;
      imgTaagg.setAttribute("src", poster);
      imgTaagg.setAttribute("class", "moviePoster");
      titleLi.setAttribute("class", "movieInfo");
      yearLi.setAttribute("class", "movieInfo");
      actorLi.setAttribute("class", "movieInfo");
      directorLi.setAttribute("class", "movieInfo");
      writerLi.setAttribute("class", "movieInfo");
      awardsLi.setAttribute("class", "movieInfo");
      movieInfo.appendChild(imgTaagg);
      movieInfo.appendChild(titleLi);
      movieInfo.appendChild(yearLi);
      movieInfo.appendChild(actorLi);
      movieInfo.appendChild(directorLi);
      movieInfo.appendChild(writerLi);
      movieInfo.appendChild(awardsLi);
    })

    .catch(function (error) {
      // Display error message in the error modal
      console.error('Error in fetch:', error);
      errorModal.style.display = 'block';
      searchButton.style.display = 'none';
    });

  const closeButton = document.querySelector('.close');

  closeButton.addEventListener('click', function () {
    errorModal.style.display = 'none';
    searchButton.style.display = 'block';
  });
};


searchButton.addEventListener("click", omdbApi);
clickMessage.innerHTML = "";

const userInput = document.querySelector('input');
const btn = document.getElementById('searchButton');
var album = document.querySelector(".album");
var cover = document.querySelector(".cover");
async function getMusic(soundtrack) {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${soundtrack}+soundtrack&type=albums&offset=0&limit=2&numberOfTopResults=2`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2f1a3d9f52mshb5bfe6b7565c7c1p1eae55jsn8b0637a741a0',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  try {
    resultsList.innerHTML = "";
    clickMessage.innerHTML = "Click the soundtrack to listen on Spotify!";
    const response = await fetch(url, options);
    const result = await response.json();
    console.log((result));
    var albumItems = result.albums.items;
    for (var i = 0; i < albumItems.length; i++) {
      var anchorTag = document.createElement("a");
      var imageTag = document.createElement("img");
      var image = albumItems[i].data.coverArt.sources[0].url;
      var albumUri = albumItems[i].data.uri;
      var textLi = document.createElement("li");
      anchorTag.setAttribute("href", albumUri);
      anchorTag.setAttribute("title", "album link");
      imageTag.setAttribute("src", image);
      textLi.textContent = "Click the soundtrack to listen on Spotify!";
      textLi.setAttribute("class","soundTrack-text");
      anchorTag.appendChild(imageTag);
      resultsList.appendChild(anchorTag);
      flex-container2.appendChild(textLi);
      
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
    listItem.style.backgroundColor = "#009688";


    // Create item name from input
    const itemName = document.createElement("span");
    itemName.textContent = item.name;

    // Create input field for comments
    const commentsInput = document.createElement("input");
    commentsInput.type = "text";
    commentsInput.value = item.comments;
    commentsInput.placeholder = "Add comments";
    commentsInput.style.backgroundColor = "#009688";
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