import FAQ from "@widget/FAQ";
import { getPopularMovieList } from "@entities/PosterCardMovie/api/getPopularMovie";
import PosterCardMovie from "@entities/PosterCardMovie";
import { useEffect, useState } from "react";
import { posterVariant } from "@shared/consts/variant";

function Support() {
  const [popularMovieList, setPopularMovieList] = useState([]);

  useEffect(() => {
    getPopularMovieList().then(setPopularMovieList);
  }, []);

  return (
    <>
      <section className="custom-container pt-10">
        <div className="">
          <h1 className="text-absolute-white font-bold text-[1.75rem]">
            Welcome to our support page!
          </h1>
          <p className="mt-2.5">
            We're here to help you with any problems you may be having with our
            product.
          </p>
        </div>
        <div className="bg-black-15 p-1.5 rounded-lg mt-6.5">
          <div className="rounded-sm overflow-hidden h-86 ">
            <ul className="flex flex-wrap gap-5 w-220 -mt-10 -ml-10 rounded-sm bg-black-06">
              {popularMovieList.map((movie, index) => (
                <li key={index}>
                  <PosterCardMovie
                    type={posterVariant.support}
                    poster={movie.poster_path}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="">
            
        </div>
      </section>
      <FAQ styles="pt-20 laptop:pt-30 desktop:pt-37.5" />
    </>
  );
}

export default Support;
