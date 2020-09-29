const title = document.getElementById("title");
const director = document.getElementById("director");
const url = document.getElementById("url");
const form = document.getElementById("movie-form");
const movieList = document.getElementById("movies");
const clearAllBtn = document.getElementById("clear-all-movies");



form.addEventListener("submit",createMovieObject);
movieList.addEventListener("click",removeMovieFromList);
clearAllBtn.addEventListener("click",removeAllMovies);
document.addEventListener("DOMContentLoaded",renderMoviesFromStorage);



function createMovieObject(event){
    const titleValue = title.value;
    const directorValue = director.value;
    const urlValue = url.value;

    if(titleValue === "" || directorValue ===""|| urlValue ===""){
        UI.showAlert("Title, Director and Url are required!!", "danger");
    }
    else{

        const newMovie = new Movie(titleValue,directorValue,urlValue);
        UI.renderMoviesOnScreen(newMovie);
        Storage.addMoviesToStorage(newMovie);

    }
 

    event.preventDefault();

}


function removeMovieFromList(e){
    if(e.target.id ==="remove-movie"){
        const movieToRemove = e.target.parentElement.parentElement;
        UI.removeMovieFromList(movieToRemove);
        UI.showAlert("Movie has succesfully deleted!","success");
        Storage.removeMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

    }
    else if(e.target.id==="trash"){
        const movieToRemove = e.target.parentElement.parentElement.parentElement;
        UI.removeMovieFromList(movieToRemove);
        UI.showAlert("Movie has succesfully deleted!","success");
        Storage.removeMovieFromStorage(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent);

    }
}

function removeAllMovies(e){
    UI.removeAllMovies();
    e.preventDefault();
    Storage.removeAllMovies();
}

function renderMoviesFromStorage(){
    Storage.renderMoviesFromStorage();
}