let searchBar = document.querySelector('#search-bar');
let searchBtn = document.querySelector('.loupe');
let trends = document.querySelector('.trends');

const img = document.querySelector('.gif');
const para = document.querySelector('.para');

function firstAPI() {

}

// fetch(`https://restcountries.com/v3.1/all`)
// .then(function(response) {
//     return response.json();
// }) 
// .then(function(response) {
//     console.log(response);
// })

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

// import { throttle } from 'throttle-debounce'
// import { renderGrid } from '@giphy/js-components'
// import { GiphyFetch } from '@giphy/js-fetch-api'

// create a GiphyFetch with your api key
// apply for a new Web SDK key. Use a separate key for every platform (Android, iOS, Web)
// const gf = new GiphyFetch('your Web SDK key')
// // create a fetch gifs function that takes an offset
// // this will allow the grid to paginate as the user scrolls
// const fetchGifs = (offset: number) => {
//     // use whatever end point you want,
//     // but be sure to pass offset to paginate correctly
//     return gf.trending({ offset, limit: 25 })
// }

// // Creating a grid with window resizing and remove-ability
// const makeGrid = (targetEl: HTMLElement) => {
//     const render = () => {
//         // here is the @giphy/js-components import
//         return renderGrid(
//             {
//                 width: innerWidth,
//                 fetchGifs,
//                 columns: width < 500 ? 2 : 3,
//                 gutter: 6,
//             },
//             targetEl
//         )
//     }
//     const resizeRender = throttle(500, render)
//     window.addEventListener('resize', resizeRender, false)
//     const remove = render()
//     return {
//         remove: () => {
//             remove()
//             window.removeEventListener('resize', resizeRender, false)
//         },
//     }
// }

// // Instantiate
// const grid = makeGrid(document.querySelector('.grid'))

// // To remove
// grid.remove()