console.log("connected test is good.");

const userInput = document.querySelector('input');
const btn = document.querySelector('button');

async function getMusic(query) {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=albums&offset=0&limit=3&numberOfTopResults=5`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3fb0440b4msh682c2c923345172p1a9677jsn0e62cb010957',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(JSON.parse(result));
} catch (error) {
	console.error(error);
}
}

getMusic("Star Wars");


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


