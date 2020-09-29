class Storage{

    static getMoviesFromStorage(){

        let storageMoviesList =""; 
        if(localStorage.getItem("movies")=== null){
            storageMoviesList = [];
        }
        else(
            storageMoviesList = JSON.parse(localStorage.getItem("movies"))
        )
        return storageMoviesList;
    }


    static addMoviesToStorage(movie){
        const storageList = Storage.getMoviesFromStorage();

        storageList.push(movie);
        localStorage.setItem("movies",JSON.stringify(storageList));
        console.log(storageList);
    }
    static renderMoviesFromStorage(){
        const storageList = Storage.getMoviesFromStorage();
        storageList.forEach(function(movie){

            UI.renderMoviesOnScreen(movie); 
        });
            
        

    }

    static removeMovieFromStorage(title){
        const storageList = Storage.getMoviesFromStorage();
        storageList.forEach(function (movie,index) { 
            if(movie.title === title){
                storageList.splice(index,1);
                
            }
            localStorage.setItem("movies",JSON.stringify(storageList));
         })
    }

    static removeAllMovies(){
        localStorage.removeItem("movies");
    }
}