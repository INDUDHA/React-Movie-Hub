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

  const [scrollPosition, setScrollPosition] = React.useState(0);
  const scrollContainerRef = React.useRef(null);

  const scrollStep = 350;

  const handleScrollLeft = () => {
    const newScrollPosition = Math.max(0, scrollPosition - scrollStep);
    setScrollPosition(newScrollPosition);
    scrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    const newScrollPosition = Math.min(
      scrollContainerRef.current.scrollWidth -
        scrollContainerRef.current.clientWidth,
      scrollPosition + scrollStep
    );
    setScrollPosition(newScrollPosition);
    scrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="heading">Movies</div>
      <div className="scroll-container">
        <div className="scroll-buttons">
          <button className="scroll-button" onClick={handleScrollLeft}>
            {"<"}
          </button>
          <div className="scroll-content" ref={scrollContainerRef}>
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
          <button className="scroll-button" onClick={handleScrollRight}>
            {">"}
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className="heading">Series</div>
      <div className="scroll-container">
        <div className="scroll-buttons">
          <button className="scroll-button" onClick={handleScrollLeft}>
            {"<"}
          </button>
          <div className="scroll-content" ref={scrollContainerRef}>
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
          <button className="scroll-button" onClick={handleScrollRight}>
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
