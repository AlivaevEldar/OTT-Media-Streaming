import Button from "@shared/ui/kit/Button";
import play from "@shared/assets/play-white.svg";
import IconWrapper from "@shared/ui/kit/IconWrapper";
import zvuk from "./assets/zvuk-white.svg";
import like from "./assets/like-white.svg";
import plus from "@shared/assets/plus-white.svg";
import { iconWrapperVariant } from "@shared/consts/variant";

function MovieHero({ title, poster }) {
  return (
    <section className="custom-container">
      <div
        className="
        grid gap-y-5 justify-items-center laptop:grid-cols-2 laptop:gap-y-0 laptop:gap-x-5
        px-6 pb-4 pt-69 mt-10  laptop:pt-136.5 desktop:pb-5 desktop:pt-160 desktop:mt-12.5
        rounded-xl
        bg-cover bg-center
        "
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${poster})`}}
      >
        <h1
          className="
            laptop:col-span-2 
            text-2xl text-absolute-white font-bold laptop:text-3xl desktop:text-[2.375rem] text-center
          "
        >
          {title}
        </h1>
        <p className="laptop:col-span-2 hidden laptop:inline laptop:mt-0.5 desktop:mt-1">
          A fiery young man clashes with an unflinching forest officer in a
          south Indian village where spirituality, fate and folklore rule the
          lands.
        </p>
        <Button
          icon={play}
          className="
           justify-self-stretch laptop:justify-self-end
           py-3.5 laptop:px-5 laptop:py-4 laptop:mt-6 desktop:mt-7.5 desktop:px-6
           font-semibold text-sm desktop:text-lg
           rounded-lg
          "
        >
          Play Now
        </Button>
        <div className="flex laptop:justify-self-start laptop:self-end gap-x-2 desktop:gap-x-2.5">
          {[plus, like, zvuk].map((svg, index) => (
            <IconWrapper key={index} type={iconWrapperVariant.movieHero}>
              <img src={svg} alt="" width={24} height={24} />
            </IconWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovieHero;
