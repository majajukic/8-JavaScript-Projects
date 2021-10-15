//Grabbing all the elements from index.html
const searchForm = document.querySelector("form");
const searchResultContainer = document.querySelector(".search-results");
const container = document.querySelector(".container");
const inputField = document.querySelector("input");

//Variables
let searchQuery = "";
const APP_ID = "7df4d05b";
const APP_KEY = "485ea90fddb844ec47a9cca785a8118f";

//adding an eventListener to the form
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector("input").value;

    fetchAPI();

    //clearing out the input field after submission
    searchQuery = "";
    inputField.value = searchQuery;

});

//FetchAPI function:
const fetchAPI = async () => {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);
    if(data.count !== 0) {
        searchResultContainer.classList.remove("search-failed");
        generateHTML(data.hits);//hits are recipes that we got from api
    } else {
       searchResultContainer.classList.add("search-failed");
       return searchResultContainer.innerHTML = "No recipes found.";
    }

}

//GenerateHTML function - looping through results and for each one creating the div element
const generateHTML = (resultData) => {
     let generatedHTML = "";
     resultData.map(result => {
        generatedHTML += 
                `<div class="item">
                    <img src="${result.recipe.image}" alt="eggs">
                    <div class="flex-container">
                        <h2 class="title">${result.recipe.label.length > 20 ? result.recipe.label.slice(0,20) + "..." : result.recipe.label }</h2>
                        <a href="${result.recipe.url}" target="_blank">Show More</a>
                    </div>
                    <p class="item-data">Calories: ${Math.floor(result.recipe.calories)} kcals</p>
                    <p class="item-data">Diet label: ${result.recipe.dietLabels.length !== 0 ? result.recipe.dietLabels : "No labels" }</p>
                    <p class="item-data">Health label: ${result.recipe.healthLabels.slice(0, 4)}</p>
                </div>`;
    });
    searchResultContainer.innerHTML = generatedHTML;
}