import React from "react";
import { useParams } from "react-router-dom";
import { serieslist } from "../common_files/series_list.js";
import "./series_details.css";
import "font-awesome/css/font-awesome.min.css";

function Seriesdetails() {
  const { title } = useParams();
  const series = serieslist.find((m) => m.title === title);
  console.log(series);

  return (
    <div className="series-details-container">
      {series && (
        <>
          <div className="row">
            <p className="heading">Series Details</p>
            <div className="column">
              <img src={series.image} className="img"></img>
            </div>
            <p className="mt">{series.title}</p>

            <div>
              <span className="head_">
                IMDB Rating <i className="fa fa-star-o icon"></i>
              </span>
              <span> : {series.imdb_rating} </span>
              <span className="head_">
                IMDB Voting <i className="fa fa-thumbs-up icon"></i>
              </span>
              <span> : {series.imdb_votes} </span>
              <span className="head_">
                Episode <i className="fa fa-film icon"></i>
              </span>
              <span> : {series.epi} </span>
              <span className="head_">
                Year <i className="fa fa-calendar icon"></i>
              </span>
              <span> : {series.year} </span>
            </div>
            <div className="desc">{series.desc}</div>
            <div>
              <span className="head">Director :</span>
              <span>{series.director}</span>
            </div>
            <div>
              <span className="head">Streaming :</span>
              <span>{series.Streaming}</span>
            </div>
            <div>
              <span className="head">Generes :</span>
              <span>{series.generes}</span>
            </div>
            <div>
              <span className="head">Actors :</span>
              <span>{series.stars}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Seriesdetails;
