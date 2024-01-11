import React from "react";
import { useParams } from "react-router-dom";
import { Movie_details } from "../common_files/movie_list.js";
import "./movie_details.css";
import "font-awesome/css/font-awesome.min.css";

function Moviedetails() {
  const { id } = useParams();
  const movie = Movie_details.find((m) => m.id === Number(id));
  console.log(movie)

  return (
    <div className="movie-details-container">
      {movie && (
        <>
          <div className="row">
            <p className="heading">Movie Details</p>
            <div className="column">
              <img src={movie.image} className="img"></img>
            </div>
            <p className="mt">{movie.title}</p>

            <div>
              <span className="head_">
                IMDB Rating <i className="fa fa-star-o icon"></i>
              </span>
              <span> : {movie.imdb_rating} </span>
              <span className="head_">
                IMDB Voting <i className="fa fa-thumbs-up icon"></i>
              </span>
              <span> : {movie.imdb_votes} </span>
              <span className="head_">
                Runtime <i className="fa fa-film icon"></i>
              </span>
              <span> : {movie.run} </span>
              <span className="head_">
                Year <i className="fa fa-calendar icon"></i>
              </span>
              <span> : {movie.run} </span>
            </div>
            <div className="desc">{movie.desc}</div>
            <div>
              <span className="head">Director :</span>
              <span>{movie.director}</span>
            </div>
            <div>
              <span className="head">Producer :</span>
              <span>{movie.producer}</span>
            </div>
            <div>
              <span className="head">Generes :</span>
              <span>{movie.generes}</span>
            </div>
            <div>
              <span className="head">Actors :</span>
              <span>{movie.stars}</span>
             
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Moviedetails;
