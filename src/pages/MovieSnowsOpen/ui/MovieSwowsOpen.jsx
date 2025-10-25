import MovieHero from "@widget/MovieHero";
import Description from "./Description";
import Cast from "./Cast";
import Reviews from "./Reviews";
import Details from "./Details";

import { useContext } from "react";
import { MovieSnowsOpenContext } from "@shared/context/MovieSnowsOpenContext";

function MoviesShowsOpen() {
  const { movieSnowsOpenTheme, setMovieSnowsOpenTheme } = useContext(
    MovieSnowsOpenContext
  );

  console.log(movieSnowsOpenTheme);

  return (
    <>
      <MovieHero title={movieSnowsOpenTheme.original_title} poster={movieSnowsOpenTheme.backdrop_path} />
      <section className="custom-container grid gap-y-5 laptop:gap-5 laptop:grid-cols-3 mt-15 laptop:mt-20 desktop:mt-25">
        <Description description={movieSnowsOpenTheme.overview} />
        <Details release={movieSnowsOpenTheme.release_date} genres={movieSnowsOpenTheme.genres} />
        <Cast />
        <Reviews />
      </section>
    </>
  );
}

export default MoviesShowsOpen;
