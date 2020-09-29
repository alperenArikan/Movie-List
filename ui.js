class UI{

    static showAlert(message, alertType){
        const alertDiv = document.createElement("div");
        alertDiv.className = ` alert alert-${alertType}`;
        alertDiv.textContent = `${message}`; 
        firstCardBody.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
        }, 1500);
    };


    static renderMoviesOnScreen(newMovie){

        movieList.innerHTML += `
       <tr>
        <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
        <td>${newMovie.title}</td>
        <td>${newMovie.director}</td>
        <td style = "text-align:right; padding-right:0;"><a href="#" id = "remove-movie" class = "btn btn-danger"><i id="trash" class="far fa-trash-alt"></i></a></td>
      </tr>`;

      title.value = "";
      director.value = "";
      url.value = "";

    };


    static removeMovieFromList(movie){
        movie.remove();
    }
    static removeAllMovies(){
        movieList.innerHTML= " ";
        UI.showAlert("All Movies Successfully Removed From The List!!","success");
    }
}