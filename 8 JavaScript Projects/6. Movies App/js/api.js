
export const fetchPopularMovies = async () => {
    //api url for popular movies:
    const BASE_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    const resp = await fetch(BASE_URL);
    const respData = await resp.json();
    console.log(respData);
    return respData;
}

export const fetchBySearch = async (searchQuery) => {
    //search api:
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${searchQuery}`;
    const resp = await fetch(SEARCH_API);
    const respData = await resp.json();
    console.log(respData);
    
    return respData;
}
