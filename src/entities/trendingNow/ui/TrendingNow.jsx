import time from "./time.svg";
import views from "./views.svg";
import { Link } from "react-router-dom";
import { viewsFormat } from "../utils/viewsFormat";
import { runtimeFormat } from "../utils/runtimeFormat";
import { useContext } from "react";
import { MovieSnowsOpenContext } from "../../../shared/context/MovieSnowsOpenContext/MovieSnowsOpenContext";

function TrendingNow({ movie }) {
  const { movieSnowsOpenTheme, setMovieSnowsOpenTheme } = useContext(MovieSnowsOpenContext)

  return (
    <>
      <Link
        to="/moviesShowsOpen"
        className="
          shrink-0
          p-3 mr-4
          border border-black-15 rounded-[0.625rem]
        "
        onClick={() => setMovieSnowsOpenTheme(movie)}
      >
        <img
          className="w-39.5 h-49 rounded-[0.625rem] object-cover"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt=""
        />
        <div className="flex justify-between mt-3">
          <div className="flex items-center gap-x-0.5 p-1 pr-2 bg-black-08 border border-black-15 rounded-full">
            <img src={time} alt="" width={20} height={20} />
            <span className="text-xs text-grey-60 font-medium">
              {runtimeFormat(movie.runtime)}
            </span>
          </div>
          <div className="flex items-center gap-x-1 p-1 pr-2 bg-black-08 border border-black-15 rounded-full">
            <img src={views} alt="" width={20} height={20} />
            <span className="text-xs text-grey-60 font-medium">
              {viewsFormat(movie.vote_count)}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default TrendingNow;
