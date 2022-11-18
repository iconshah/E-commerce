// for API
const API_KEY = "e9d9a62a042ee14ca2d3c7eab55b7f9d";
const url = "https://api.themoviedb.org/3/search/movie?api_key=e9d9a62a042ee14ca2d3c7eab55b7f9d";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";



function generateUrl(path) {
    const url = `https://api.themoviedb.org/3${path}?api_key=e9d9a62a042ee14ca2d3c7eab55b7f9d`;
    return url;
}


function requestMovies(url, onComplete, onError) {
    fetch(url)
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError);
}


function searchMovie(value) {
    const path = "/search/movie";
    const url = generateUrl(path) + "&query=" + value;
    requestMovies(url, renderSearchMovies, handleError);
}
function getUpcomingMovies(value) {
    const path = "/movie/upcoming";
    const url = generateUrl(path);
    const render = renderMovies.bind({ title: "Upcoming Movies" });
    requestMovies(url, render, handleError);
}
function getTopRatedMovies(value) {
    const path = "/movie/top_rated";
    const url = generateUrl(path);
    const render = renderMovies.bind({ title: "Top Rated Movies" });
    requestMovies(url, render, handleError);
}
function getPopularMovies(value) {
    const path = "/movie/popular";
    const url = generateUrl(path);
    const render = renderMovies.bind({ title: "Popular Movies" });
    requestMovies(url, render, handleError);
}
function getNowPlayingMovies(value) {
    const path = "/movie/now_playing";
    const url = generateUrl(path);
    const render = renderMovies.bind({ title: "Now-Playing Movies" });
    requestMovies(url, render, handleError);
}


