import PosterCardPopularMovie from "@entities/posterCardMovie";
import { getPopularMovieList } from "@entities/posterCardMovie";
import { useState, useEffect } from "react";
import { posterVariant } from "@shared/consts/variant";
import SVGIcon from "./svgIcon";
import Button from "@shared/ui/kit/Button";
import play from "./play.svg";

function HeroHome() {
  const [populatMovieList, setPopularMovieList] = useState([]);

  useEffect(() => {
    getPopularMovieList().then((result) => {
      console.log(result);
      setPopularMovieList(result);
    });
  }, []);

  return (
    <section
      className={`custom-container relative overflow-hidden pt-37.5 bg-[linear-gradient(to_bottom,_#141414_0%,_#14141475_50%,#141414_70%,#141414_80%)] laptop:pt-50 -mt-25.5 desktop:-mt-30`}
    >
      <div className="">
        <SVGIcon className="mx-auto w-50 h-50 laptop:w-75 laptop:h-75 desktop:w-117.5 desktop:h-117.5" />
        <div className="mt-12.5 laptop:mt-25 desktop:mt-32.5">
          <div className="text-center">
            <h1 className="text-absolute-white font-bold text-[1.75rem] laptop:text-5xl desktop:text-[3.625rem]">
              The Best Streaming Experience
            </h1>
            <p className="mt-2.5 mx-auto lg:max-w-285 laptop:text-sm! desktop:mt-3.5">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere.
              <span className="hidden lg:inline">
                {" "}
                With StreamVibe, you can enjoy a wide variety of content,
                including the latest blockbusters, classic movies, popular TV
                shows, and more. You can also create your own watchlists, so you
                can easily find the content you want to watch.
              </span>
            </p>
          </div>
          <Button
            icon={play}
            styles="mt-7.5 mx-auto w-63 h-16 rounded-lg laptop:mt-10 desktop:mt-12.5 desktop:w-62.5 desktop:h-16 desktop:text-lg"
          >
            Start Watching Now
          </Button>
        </div>
      </div>
      <ul className="absolute -z-10 -top-7 -left-7 flex flex-wrap gap-2.5 w-[131rem] desktop:gap-5">
        {populatMovieList.map((movie, index) => (
          <li key={index}>
            <PosterCardPopularMovie
              type={posterVariant.heroHome}
              poster={movie.poster_path}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HeroHome;
