let searchBar = document.querySelector('#search-bar');
let searchBtn = document.querySelector('.loupe');
let trends = document.querySelector('.trends');

const img = document.querySelector('.gif');
const para = document.querySelector('.para');

//Loading gif https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif

img.src = "https://media2.giphy.com/media/3zDdFSPALuCe6C43nM/giphy.gif?cid=f46307b3hf6429n0nhfl4lkk6qokcs6uztmei7oa7rxdszlp&rid=giphy.gif&ct=g"

function fetchGif(input) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=1oUYRS4PQmiOZlnbyawKUEKUUFUcNcZj&s=${input}`, {mode : "cors"})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
        console.log(response);
    })
    .catch((e) => {
        img.src = 'https://media0.giphy.com/media/lqFHf5fYMSuKcSOJph/giphy.gif?cid=f46307b3ayh8y08vme4hri2uwo8na7fp1zidqwao8gx3w3v5&rid=giphy.gif&ct=g'
;
        console.log(e);
    })
    
}

searchBtn.addEventListener('click', () => {
    fetchGif(searchBar.value);
    console.log(searchBar.value);
})

trends.addEventListener('click', (e) => {
    fetchGif(e.target.innerText)
    console.log(e.target.innerText);
})
