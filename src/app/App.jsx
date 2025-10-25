import Header from "@widget/Header";
import Home from "@pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "@widget/Footer";
import Promo from "@widget/Promo";
import Support from "@pages/Support";
import MoviesShows from "@pages/MoviesShows";
import Subscription from "@pages/Subscription";
import OpenSearchGenres from "@pages/OpenSearchGenres";
import { SearchContext } from "@shared/context/SearchContext";
import { useState } from "react";
import MoviesShowsOpen from "@pages/MovieSnowsOpen";
import { MovieSnowsOpenContext } from "@shared/context/MovieSnowsOpenContext";

function App() {
  const [searchTheme, setSearchTheme] = useState({ title: "" });
  const [movieSnowsOpenTheme, setMovieSnowsOpenTheme] = useState({description: "test1000"})

  return (
    <>
      <MovieSnowsOpenContext.Provider value={{movieSnowsOpenTheme, setMovieSnowsOpenTheme}}>
        <SearchContext.Provider value={{ searchTheme, setSearchTheme }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="moviesShows" element={<MoviesShows />} />
              <Route path="/support" element={<Support />} />
              <Route path="/subscriptions" element={<Subscription />} />
              <Route path="/openSearch&Genres" element={<OpenSearchGenres />} />
              <Route path="/moviesShowsOpen" element={<MoviesShowsOpen />} />
            </Routes>
            <Promo />
            <Footer />
          </BrowserRouter>
        </SearchContext.Provider>
      </MovieSnowsOpenContext.Provider>
    </>
  );
}

export default App;
