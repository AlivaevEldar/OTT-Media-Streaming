import mobile from "./assets/mobile.svg";
import tablet from "./assets/tablet.svg";
import tv from "./assets/tv.svg";
import laptop from "./assets/laptop.svg";
import gamepad from "./assets/gamepad.svg";
import vr from "./assets/vr.svg";

import IconWrapper from "@shared/ui/kit/IconWrapper";
import { iconWrapperVariant } from "@shared/consts/variant";

function Crossplatform() {
  const crossplatformArray = [
    {
      icon: mobile,
      label: "Smartphones",
    },
    {
      icon: tablet,
      label: "Tablet",
    },
    {
      icon: tv,
      label: "Smart TV",
    },
    {
      icon: laptop,
      label: "Laptops",
    },
    {
      icon: gamepad,
      label: "Gaming Consoles",
    },
    {
      icon: vr,
      label: "VR Headsets",
    },
  ];

  return (
    <section className="custom-container pt-12.5 laptop:pt-30 desktop:pt-37.5">
      <div className="">
        <div className="">
          <h1 className="text-xl font-bold text-absolute-white laptop:text-[1.75rem] desktop:text-[2.375rem]">
            We Provide you streaming experience across various devices.
          </h1>
          <p className="mt-2.5 laptop:max-w-[90%] desktop:mt-3.5 desktop:max-w-[80%]">
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere.
            <span className="hidden laptop:inline">
              Our platform is designed to be compatible with a wide range of
              devices, ensuring that you never miss a moment of entertainment.
            </span>
          </p>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 laptop:mt-15 laptop:grid-cols-3 desktop:mt-20 desktop:gap-7.5">
          {crossplatformArray.map((crossplatform, index) => (
            <li key={index}>
              <article className="p-6 border border-black-15 bg-[linear-gradient(to_bottom_left,_theme(color.red.45)_-200%,theme(color.black.06)_35%,theme(color.black.06)_100%)] rounded-[0.625rem] laptop:p-10 desktop:rounded-xl desktop:p-12.5">
                <div className="flex gap-x-2.5 items-center laptop:gap-x-3 desktop:gap-x-4">
                  <IconWrapper type={iconWrapperVariant.crossPlatform}>
                    <img
                    className="w-6 laptop:w-7.5 desktop:w-10"
                      src={crossplatform.icon}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </IconWrapper>
                  <h3 className="text-absolute-white font-semibold text-lg laptop:text-xl desktop:text-2xl">{crossplatform.label}</h3>
                </div>
                <p className="mt-5 laptop:mt-6 desktop:mt-7.5">
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Crossplatform;
