console.log("connected test is good.");

const userInput = document.querySelector('input');
const btn = document.querySelector('button');
var album = document.querySelector(".album");
var cover = document.querySelector(".cover");
async function getMusic(album) {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${album}&type=albums&offset=0&limit=3&numberOfTopResults=5`;
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3fb0440b4msh682c2c923345172p1a9677jsn0e62cb010957',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log((result));
  album.textContext = JSON.stringify(result.albums.items[0].data.name);
  cover.src = JSON.stringify(result.albums.items[0].data.coverArt.sources[0]);
  // return result;
} catch (error) {
	console.error(error);
}
}

// getMusic(userInput);

btn.addEventListener("click",function(){
  const albumName = userInput.value;
  getMusic(albumName);
});

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


