import logo from "./assets/logo.svg";
import IconWrapper from "@shared/ui/kit/IconWrapper";
import { iconWrapperVariant } from "@shared/consts/variant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import SearchBar from "@features/SearchBar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("is-lock");
  }, [isOpen]);

  return (
    <>
      <header
        className={`
        ${styles.animationHeaderScroolBg}
        sticky top-0 z-30
        custom-container
      `}
      >
        <div
          className={`
             flex justify-between items-center laptop:grid laptop:grid-cols-[1fr_auto_1fr]
             pt-10 pb-3.5 laptop:py-4.5 desktop:py-5.5
          `}
        >
          <Link to="/">
            <img
              className="w-29 laptop:w-41.5 desktop:w-50"
              src={logo}
              alt=""
              width={116}
              height={35}
            />
          </Link>
          <Nav />
          <button className="" onClick={() => setIsOpen(true)}>
            <IconWrapper type={iconWrapperVariant.burger}>
              <div
                className="
                grid gap-y-1 justify-items-end
                w-6 h-6 py-1.5 px-0.5
              "
              >
                <span className="w-full border-1 rounded-full border-absolute-white"></span>
                <span className="w-full border-1 rounded-full border-absolute-white"></span>
                <span className="w-1/2 border-1 rounded-full border-absolute-white"></span>
              </div>
            </IconWrapper>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;
