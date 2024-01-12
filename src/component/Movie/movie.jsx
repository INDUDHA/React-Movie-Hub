import React from "react";
import { Link } from "react-router-dom";
import "./movie.css";
import { Movie_details } from "../common_files/movie_list.js";
import { serieslist } from "../common_files/series_list.js";

function Movie({ searchResults }) {
  const moviesToDisplay =
    searchResults.movies?.length > 0
      ? searchResults.movies
      : Object.values(Movie_details);
  const seriesToDisplay =
    searchResults.series?.length > 0 ? searchResults.series : serieslist;

  const [movieScrollPosition, setMovieScrollPosition] = React.useState(0);
  const [seriesScrollPosition, setSeriesScrollPosition] = React.useState(0);
  const movieScrollContainerRef = React.useRef(null);
  const seriesScrollContainerRef = React.useRef(null);

  const scrollStep = 350;

  const handleMovieScrollLeft = () => {
    const newScrollPosition = Math.max(0, movieScrollPosition - scrollStep);
    setMovieScrollPosition(newScrollPosition);
    movieScrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  const handleMovieScrollRight = () => {
    const newScrollPosition = Math.min(
      movieScrollContainerRef.current.scrollWidth -
        movieScrollContainerRef.current.clientWidth,
      movieScrollPosition + scrollStep
    );
    setMovieScrollPosition(newScrollPosition);
    movieScrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  const handleSeriesScrollLeft = () => {
    const newScrollPosition = Math.max(0, seriesScrollPosition - scrollStep);
    setSeriesScrollPosition(newScrollPosition);
    seriesScrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  const handleSeriesScrollRight = () => {
    const newScrollPosition = Math.min(
      seriesScrollContainerRef.current.scrollWidth -
        seriesScrollContainerRef.current.clientWidth,
      seriesScrollPosition + scrollStep
    );
    setSeriesScrollPosition(newScrollPosition);
    seriesScrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="heading">Movies</div>
      <div className="scroll-container">
        <div className="scroll-buttons">
          <button className="scroll-button" onClick={handleMovieScrollLeft}>
            {"<"}
          </button>
          <div className="scroll-content" ref={movieScrollContainerRef}>
            <div className="movie-list">
              {moviesToDisplay.map((movie, index) => (
                <Concept
                  key={index}
                  title={movie.title}
                  image={movie.image}
                  id={movie.id}
                />
              ))}
            </div>
          </div>
          <button className="scroll-button" onClick={handleMovieScrollRight}>
            {">"}
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className="heading">Series</div>
      <div className="scroll-container">
        <div className="scroll-buttons">
          <button className="scroll-button" onClick={handleSeriesScrollLeft}>
            {"<"}
          </button>
          <div className="scroll-content" ref={seriesScrollContainerRef}>
            <div className="movie-list">
              {seriesToDisplay.map((series, index) => (
                <Series
                  key={index}
                  title={series.title}
                  image={series.image}
                  id={series.id}
                />
              ))}
            </div>
          </div>
          <button className="scroll-button" onClick={handleSeriesScrollRight}>
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}

function Concept(props) {
  return (
    <Link to={`/Movie-details/${props.id}`}>
      <div className="movie-item">
        <img className="mi" src={props.image} alt={props.title} />
        <p className="mp">
          {props.id}.{props.title}
        </p>
      </div>
    </Link>
  );
}

function Series(props) {
  return (
    <Link to={`/Series-details/${props.title}`}>
      <div className="movie-item">
        <img className="mi" src={props.image} alt={props.title} />
        <p className="mp">
          {props.id}.{props.title}
        </p>
      </div>
    </Link>
  );
}

export default Movie;
