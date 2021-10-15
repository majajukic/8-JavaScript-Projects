import {fetchPopularMovies, fetchBySearch} from "./api.js";

//elements:
const searchForm = document.querySelector("form");
const searchResultContainer = document.querySelector(".search-results");
const inputField = document.querySelector("input");
const btn = document.querySelector(".popularBtn");

//imagepath:
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

//defaultImage
const DEFAULT_IMG = "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg";

//Browsing by search
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let searchInput = e.target.querySelector("input").value;
   
    fetchBySearch(searchInput).then(result => {   
        if(result.total_results !== 0) {
            searchResultContainer.classList.remove("search-failed");
            const movieArray = result.results;
            createDataPost(movieArray);
        } else {
            searchResultContainer.classList.add("search-failed");
            searchResultContainer.innerHTML = "No results found.";
        }
    });

    searchInput = "";
    inputField.value = searchInput;

}); 

//Most popular btn browsing
btn.addEventListener("click", () => {
    fetchPopularMovies().then(result => {
        const movieArray = result.results;
        createDataPost(movieArray);

    });
});

const createDataPost = (movieArray) => {
    let moviesHTML = "";
    movieArray.map(movie => {
        moviesHTML += `<div class="item">
                            <div class="image">
                                <img src="${ movie.poster_path ? IMGPATH + movie.poster_path : DEFAULT_IMG }" alt="image">
                            </div>
                            <div class="flex-container">
                                <h2 class="title">${ movie.title }</h2>
                                <div class="ratingDiv">
                                    <p class="rating">${ movie.vote_average }</p>
                                </div>
                            </div>
                            <div class="overlay">
                                <p class="item-data">${ movie.overview }</p>
                            </div>
                        </div>`;
    });
    searchResultContainer.innerHTML = moviesHTML;

} 
 