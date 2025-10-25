import Slider from "@widget/Slider";
import GenresCard from "@entities/GenresCard";
import { getTrendingNow } from "@entities/trendingNow";
import { getGenresMovie } from "@entities/GenresCard";
import { useEffect, useState } from "react";
import TrendingNow from "@entities/trendingNow";
import NewReleases from "@entities/NewReleases";
import { getNewReleases } from "@entities/NewReleases";

function MoviesShows() {
  const [genresMovie, setGenresMovie] = useState([]);
  const [trendingNow, setTrendingNow] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  function formatReleaseDate(dateStr) {
    if (!dateStr) return ""; // на случай пустой даты
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  useEffect(() => {
    getGenresMovie().then((genres) => {
      setGenresMovie(genres);
    });
    getTrendingNow().then((movies) => {
      setTrendingNow(movies);
    });
    getNewReleases().then((releases) => {
      setNewReleases(releases);
    });
  }, []);

  return (
    <>
      <Slider
        title="Our Genres"
        slides={
          <>
            {genresMovie.map((genres, index) => (
              <GenresCard
                key={index}
                title={genres.title}
                posters={genres.posters}
              />
            ))}
          </>
        }
      />
      <Slider
        title="Trending Now"
        slides={
          <>
            {trendingNow.map((movie, index) => (
              <TrendingNow key={index} movie={movie} />
            ))}
          </>
        }
      />
      <Slider
        title="New Releases"
        slides={newReleases.map((movie) => (
          <>
            <NewReleases
              poster={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              releases={formatReleaseDate(movie.release_date)}
            />
          </>
        ))}
      />
    </>
  );
}

export default MoviesShows;
