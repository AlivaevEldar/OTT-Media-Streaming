import useEmblaCarousel from "embla-carousel-react";
import Wrapper from "./Wrapper";
import people from "./assets/images.jpg";
import IconWrapper from "@shared/ui/kit/IconWrapper";
import { iconWrapperVariant } from "@shared/consts/variant";
import arrow from "./assets/arrow-grey.svg";

function Cast() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  return (
    <Wrapper className="grid laptop:col-span-2">
      <h2 className="p self-center">Cast</h2>
      <div className="flex gap-x-2 justify-self-end">
        <IconWrapper
          onClick={() => emblaApi.scrollPrev()}
          type={iconWrapperVariant.swiperNavigationCastReviews}
        >
          <img
            className="rotate-180"
            src={arrow}
            alt=""
            width={20}
            height={20}
          />
        </IconWrapper>
        <IconWrapper
          onClick={() => emblaApi.scrollNext()}
          type={iconWrapperVariant.swiperNavigationCastReviews}
        >
          <img src={arrow} alt="" width={20} height={20} />
        </IconWrapper>
      </div>
      <div
        ref={emblaRef}
        className="mt-4 laptop:mt-5 overflow-hidden col-span-2"
      >
        <div className="flex">
          {[...Array(30)].map(() => (
            <img
              className="mr-2.5 w-17.5 h-18.5 rounded-[0.625rem] object-cover laptop:w-22 laptop:h-22.5"
              src={people}
              width={70}
              height={75}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Cast;
