import { Link } from "react-router-dom";
import { iconWrapperVariant } from "@shared/consts/variant";
import IconWrapper from "@shared/ui/kit/IconWrapper";
import twitter from "./assets/twitter.svg";
import facebook from "./assets/facebook.svg";
import linkedIn from "./assets/linkedIn.svg";

function Footer() {
  const FooterLinks = [
    {
      title: "Home",
      links: ["Categories", "Devices", "Pricing", "FAQ"],
    },
    {
      title: "Movies",
      links: ["Gernes", "Trending", "New Release", "Popular"],
    },
    {
      title: "Shows",
      links: ["Gernes", "Trending", "New Release", "Popular"],
    },
    {
      title: "Support",
      links: ["Contact Us"],
    },
    {
      title: "Subscription",
      links: ["Plans", "Features"],
    },
  ];

  return (
    <footer
      className="
      custom-container
      grid gap-y-12.5 laptop:gap-y-20 desktop:gap-y-25
      py-12.5 pb-5 laptop:pt-20 laptop:pb-10
      bg-black-06
    "
    >
      <ul className="grid grid-cols-2 gap-y-7.5 lg:grid-cols-3 laptop:gap-x-5 desktop:gap-x-7.5 laptop:grid-cols-6">
        {FooterLinks.map((obj) => (
          <li key={obj.title}>
            <div className="grid gap-y-4 laptop:gap-y-5 desktop:gap-y-6">
              <h3 className="text-absolute-white font-semibold text-base laptop:text-lg desktop:text-xl">
                {obj.title}
              </h3>
              <ul className="grid gap-y-2 laptop:gap-y-2.5 desktop:gap-y-3.5">
                {obj.links.map((links) => (
                  <li key={links}>
                    <Link className="p !font-medium" to="/">
                      {links}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
        <li>
          <div className="grid gap-y-4 laptop:gap-y-5 desktop:gap-y-6">
            <h3 className="text-absolute-white font-semibold text-base">
              Connect With Us
            </h3>
            <ul className="flex gap-x-2.5 desktop:gap-y-3.5">
              {[facebook, twitter, linkedIn].map((item, index) => (
                <li key={index}>
                  <a href="#">
                    <IconWrapper type={iconWrapperVariant.footer} disabled={true}>
                      <img src={item} alt="" width={20} height={20} />
                    </IconWrapper>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
      <div
        className="
        grid gap-y-5 laptop:flex laptop:justify-between
        pt-5 border-t desktop:pt-6
      border-black-15
      "
      >
        <p>@2023 streamvib, All Rights Reserved</p>
        <ul className="flex gap-x-4">
          {["Terms of Use", "Privacy Policy", "Cookie Policy"].map((item) => (
            <li
              key={item}
              className="pr-4 border-r desktop:pr-5 border-black-15 last:pr-0 last:border-r-0"
            >
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
