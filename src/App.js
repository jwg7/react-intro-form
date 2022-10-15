import { useState } from "react";
import "./App.css";

///////////////////////////////////////////////////
//////////////////////////////////////////////////

const MoviesDisplay = (props) => {
  return (
    <div>
      {props.movieList.map((movie, index) => {
        return <MovieItem movie={movie} key={index} />;
      })}
    </div>
  );
};

////////////////////////////////////////////////////
///////////////////////////////////////////////////

const MovieItem = (props) => {
  return (
    <div>
      <h2>Title: {props.movie.title}</h2>
      <p>Director: {props.movie.director}</p>
      <p>Actors: {props.movie.actors}</p>
      <p>Plot: {props.movie.plot}</p>
      <p>Year: {props.movie.year}</p>
      <p>IMDB Rating: {props.movie.imdbRating}</p>
    </div>
  );
};

/////////////////////////////////////////////////////
////////////////////////////////////////////////////

function MovieForm(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");
  const [plot, setPlot] = useState("");
  const [year, setYear] = useState(0);
  const [imdbRating, setImdbRating] = useState(0);
  return (
    <div>
      <h1>Movie Form</h1>
      <label>Title: </label>
      <input
        type="text"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <br />
      <label>Director: </label>
      <input
        type="text"
        onChange={(event) => {
          setDirector(event.target.value);
        }}
      />
      <br />
      <label>Actors: </label>
      <input
        type="text"
        onChange={(event) => {
          setActors(event.target.value);
        }}
      />
      <br />
      <label>Plot: </label>
      <input
        type="text"
        onChange={(event) => {
          setPlot(event.target.value);
        }}
      />
      <br />
      <label>Year: </label>
      <input
        type="number"
        onChange={(event) => {
          setYear(event.target.value);
        }}
      />
      <br />
      <label>imdb Rating: </label>
      <input
        type="number"
        step=".1"
        onChange={(event) => {
          setImdbRating(event.target.value);
        }}
      />
      <br />
      <button
        className="add-movie"
        onClick={() => {
          console.log("clicked");
          const newMovie = {
            title: title,
            director: director,
            actors: actors,
            plot: plot,
            year: year,
            imdbRating: imdbRating,
          };
          props.handleAddMovie(newMovie);
        }}
      >
        Add Movie
      </button>
      {/* Commenting out lines 113 - 118 due to space. Only completed due to Part 1. Part 2 looks much cleaner with this removed. */}
      {/* <p>Current Title: {title}</p>
      <p>Current Director: {director}</p>
      <p>Current Actors: {actors}</p>
      <p>Current Plot: {plot}</p>
      <p>Current Year: {year}</p>
      <p>Current imdb Rating: {imdbRating}</p> */}
    </div>
  );
}

//////////////////////////////////////////////////////
/////////////////////////////////////////////////////

function App() {
  const [movieList, setMovieList] = useState([]);
  console.log(movieList);
  const handleAddMovie = (newMovie) => {
    const movieListCopy = [...movieList];
    movieListCopy.push(newMovie);
    setMovieList(movieListCopy);
  };

  return (
    <div className="App App-header">
      <MovieForm handleAddMovie={handleAddMovie} />
      <MoviesDisplay movieList={movieList} />
    </div>
  );
}

////////////////////////////////////////////////////
///////////////////////////////////////////////////

export default App;
