import Button from "@shared/ui/kit/Button";
import plus from "@shared/assets/plus-white.svg";
import Wrapper from "./Wrapper";
import useEmblaCarousel from "embla-carousel-react";
import { iconWrapperVariant } from "@shared/consts/variant";
import IconWrapper from "@shared/ui/kit/IconWrapper";
import arrow from "./assets/arrow-grey.svg";

function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  return (
    <Wrapper className="grid grid-cols-[1fr_auto] gap-y-6 items-center laptop:col-span-2">
      <h2 className="p">Reviews</h2>
      <Button
        className="p-3 font-medium! text-sm! !bg-black-08 border border-black-15! rounded-md!"
        icon={plus}
      >
        Add Your Review
      </Button>
      <div ref={emblaRef} className="overflow-hidden col-span-2">
        <div className="flex">
          {[...Array(20)].map(() => (
            <article className="shrink-0 max-w-77.5 laptop:max-w-94 mr-4 p-6 laptop:p-7.5 bg-black-06 border-black-15 border rounded-xl">
              <div className="">
                <div className="">
                  <h3 className="text-base font-medium text-absolute-white">
                    Aniket Roy
                  </h3>
                  <span className="p">From India</span>
                </div>
                <div className=""></div>
              </div>
              <p className="mt-4">
                This movie was recommended to me by a very dear friend who went
                for the movie by herself. I went to the cinemas to watch but had
                a houseful board so couldn’t watch it.
              </p>
            </article>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-2.5 justify-self-center col-span-2">
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
    </Wrapper>
  );
}

export default Reviews;
