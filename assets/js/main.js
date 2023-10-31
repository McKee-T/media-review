console.log("connected test is good.");

// find the form on the page
var cityForm = document.querySelector("#city-form");
// var cityForm = $('#city-form');
var cityField = document.querySelector("#input-city");
// var cityField = $('#input-city');

// event listener/handler/function
function captureCity(event){
  // stop refreshing
  event.preventDefault();
  console.log(event);
  console.log(event.target);

  firstFetch(cityField.value);
  // jquery value capture
  // firstFetch(cityField.val());
}


function firstFetch(city){
  var searchUrl = 'https://api.giphy.com/v1/gifs/search';
  var apiKey = '?api_key=RANHjz2L1Drs7AUTUKTyWRWnP2iuiQpy'; //first_parameter
  var additionOptions = '&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips'; // added by api explorer
  var cityParam = "&q=" + city;
  var url = searchUrl + apiKey + additionOptions + cityParam;
  console.log(url);
  fetch(url)// promise based
  .then(function(response){
    return response.json(); // parse the response data
  })
  .then(function(data) { // data should be an array or an object
    console.log(data);
    for(var i = 0; i < data.data.length; i++){
      console.log(data.data[i].images.original.url);
      var giphy = data.data[i].images.original.url;
      // create
      var imgEl = document.createElement('img');
      // var imgEl = $('<img>');

      // attr/text
      imgEl.setAttribute('src', giphy);
      // imgEl.attr('src', giphy);

      // append
      document.querySelector('#city-giphy').appendChild(imgEl);
      // $('#city-giphy').append(imgEl);

      // <section class="column is-half" id="city-giphy">
        
      // </section>

      secondFetch(city);
    }
    
    
  })
}



function secondFetch(city){
  var searchUrl = 'https://api.giphy.com/v1/gifs/search';
  var apiKey = '?api_key=RANHjz2L1Drs7AUTUKTyWRWnP2iuiQpy'; //first_parameter
  var additionOptions = '&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips'; // added by api explorer
  var cityParam = "&q=" + city + "+spongebob";
  var url = searchUrl + apiKey + additionOptions + cityParam;
  console.log(url);
  fetch(url)// promise based
  .then(function(response){
    return response.json(); // parse the response data
  })
  .then(function(data) { // data should be an array or an object
    console.log(data);
    for(var i = 0; i < data.data.length; i++){
      console.log(data.data[i].images.original.url);
      var giphy = data.data[i].images.original.url;
      // create
      var imgEl = document.createElement('img');
      // var imgEl = $('<img>');

      // attr/text
      imgEl.setAttribute('src', giphy);
      // imgEl.attr('src', giphy);

      // append
      document.querySelector('#sponge-giphy').appendChild(imgEl);
      // $('#sponge-giphy').append(imgEl);

      // <section class="column is-half" id="sponge-giphy">
        
      // </section>

    }
    
    
  })
}


// addEventListener
cityForm.addEventListener("submit", captureCity);
