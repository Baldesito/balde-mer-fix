import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ShowTV from "./components/ShowTV";
import MovieDetails from "./components/MovieDetails";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container-fluid px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<ShowTV />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
