import useEmblaCarousel from "embla-carousel-react";

function Slider({ title = "", slides = null }) {
  const [emblaRef] = useEmblaCarousel({ align: "start" });

  return (
    <section
      className="
        custom-container custom-container-pr-0
        grid gap-y-5
      "
    >
      <div className="">
        <h1 className="font-bold text-2xl text-absolute-white">{title}</h1>
      </div>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">{slides}</div>
      </div>
    </section>
  );
}

export default Slider;
