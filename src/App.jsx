import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header/header";
import Footer from "./component/Footer/footer";
import Movie from "./component/Movie/movie";
import Moviedetails from "./component/Movie_Details/movie_details";
import "./App.css";
import { Movie_details } from "./component/common_files/movie_list.js";
import { serieslist } from "./component/common_files/series_list.js";
import Seriesdetails from "./component/Series_Details/series_details.jsx";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (newSearchTerm) => {
    const updatedSearchTerm = newSearchTerm.toLowerCase();
    setSearchTerm(updatedSearchTerm);
  
    const filteredMovies = updatedSearchTerm
      ? Movie_details.filter((movie) =>
          movie.title.toLowerCase().includes(updatedSearchTerm)
        )
      : [];
  
    const filteredSeries = updatedSearchTerm
      ? serieslist.filter((series) =>
          series.title.toLowerCase().includes(updatedSearchTerm)
        )
      : [];
  
    setSearchResults({ movies: filteredMovies, series: filteredSeries });
  };
  
  

  return (
    <Router>
      <div>
        <Header onSearch={handleSearch} searchResults={searchResults} />
        <main>
          <Routes>
            <Route path="/" element={<Movie searchResults={searchResults} />} />
            <Route path="/Movie-details/:id" element={<Moviedetails />} />
            <Route path="/Series-details/:title" element={<Seriesdetails />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
