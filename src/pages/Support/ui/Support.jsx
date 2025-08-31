import FAQ from "@widget/FAQ";
import SupportForm from "@features/SupportForm";
import PosterCardPopularMovie from "@entities/PosterCardMovie/ui/PosterCard";
import { getPopularMovieList } from "@entities/PosterCardMovie/api/getPopularMovie";
import { useEffect, useState } from "react";
import { posterVariant } from "@shared/consts/variant";

function Support() {
  const [popularMovieList, setPopularMovieList] = useState([]);

  useEffect(() => {
    getPopularMovieList().then(setPopularMovieList);
  }, []);

  return (
    <>
      <section 
        className="
          custom-container
          grid gap-y-12.5 laptop:grid-cols-[auto_1fr] laptop:gap-x-12.5 desktop:gap-x-20
          py-10 laptop:py-25 desktop:py-28.5
        "
      >
        <div className="grid gap-y-7.5 laptop:w-107.5 laptop:gap-y-10 desktop:w-133 desktop:gap-y-12.5">
          <div className="grid gap-y-2.5 desktop:gap-y-3.5">
            <h1 className="text-absolute-white font-bold text-[1.75rem] laptop:text-[2.375rem] desktop:text-5xl">
              Welcome to our support page!
            </h1>
            <p>
              We're here to help you with any problems you may be having with
              our product.
            </p>
          </div>
          <div className="overflow-hidden h-86 rounded-sm outline-6 outline-black-15 laptop:h-95 desktop:rounded-md desktop:h-119">
            <ul
              className="
                flex flex-wrap gap-5
                -mt-5 -ml-5 w-400
              "
            >
              {popularMovieList.map((movie, index) => (
                <li key={index}>
                  <PosterCardPopularMovie
                    type={posterVariant.support}
                    poster={movie.poster_path}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SupportForm />
      </section>
      <FAQ styles="pt-20 laptop:pt-30 desktop:pt-37.5" />
    </>
  );
}

export default Support;
