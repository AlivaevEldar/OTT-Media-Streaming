import Button from "@shared/ui/kit/Button";
import { posterVariant } from "@shared/consts/variant";
import { getPopularMovieList } from "@entities/PosterCardMovie";
import PosterCardPopularMovie from "@entities/posterCardMovie";
import { useEffect, useState } from "react";

function Promo() {
  const [popularMovieList, setPopularMovieList] = useState([]);

  useEffect(() => {
    getPopularMovieList().then(setPopularMovieList);
  }, []);

  return (
    <section className="custom-container py-20 laptop:py-30 desktop:py-37.5">
      <div
        className="
          py-12.5 px-7.5 rounded-xl border border-black-15 overflow-hidden relative laptop:py-20 laptop:px-15 desktop:py-25 desktop:px-20
          bg-[linear-gradient(to_bottom,rgba(20,15,15,0.97)_-2%,rgba(34,14,14,0.91)_60%,rgba(229,0,0,0.40)_120%)]
          laptop:bg-[linear-gradient(to_right,rgba(20,15,15,0.97)_-2%,rgba(34,14,14,0.91)_60%,rgba(229,0,0,0.40)_120%)]
        "
      >
        <div className="flex flex-col text-center items-center laptop:flex-row laptop:justify-between laptop:text-start">
          <div className="">
            <h3 className="text-2xl text-absolute-white font-bold laptop:text-[1.75rem] desktop:text-5xl">
              Start your free trial today!
            </h3>
            <p className="mt-2.5 desktop:mt-3.5">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <Button className="mt-12.5 w-37 h-12 rounded-lg font-semibold text-sm text-absolute-white laptop:mt-0 desktop:w-47 desktop:h-16 desktop:text-lg">
            Start a Free Trail
          </Button>
        </div>
        <ul className="flex flex-wrap absolute -top-10 -left-10 w-525 gap-5 -z-10">
          {popularMovieList.map((movie, index) => (
            <li key={index}>
              <PosterCardPopularMovie
                type={posterVariant.promo}
                poster={movie.poster_path}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Promo;
