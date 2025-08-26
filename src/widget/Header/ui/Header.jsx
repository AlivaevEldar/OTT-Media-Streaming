import logo from "./assets/logo.svg";
import XWhite from "@shared/assets/x-white.svg";
import IconWrapper from "@shared/ui/kit/IconWrapper";
import { iconWrapperVariant } from "@shared/consts/variant";
import SearchBar from "@features/SearchBar";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.css";

function Header() {
  const [isActiveNavItem, setIsActiveNavItem] = useState(
    useLocation().pathname
  );
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
             grid grid-cols-[auto_auto] justify-between items-center laptop:grid-cols-[1fr_auto_1fr]
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
          <nav
            className={`
            hidden laptop:flex laptop:items-center 
            laptop:w-106 laptop:h-15 laptop:px-7.5 desktop:w-146 desktop:h-19
            laptop:border-3 laptop:border-black-12 laptop:bg-black-06 laptop:rounded-[0.625rem] desktop:border-3 desktop:rounded-xl
            ${
              isActiveNavItem === "/Subscriptions" &&
              "laptop:pr-2 laptop:pl-7.5 desktop:pl-10 desktop:pr-2.5"
            } 
            ${
              isActiveNavItem === "/" &&
              "laptop:pl-2 laptop:pr-7.5 desktop:pr-10 desktop:pl-2.5"
            } 
          `}
          >
            <ul className="laptop:flex laptop:justify-between laptop:w-full">
              {[
                { label: "Home", path: "/" },
                { label: "Movies & Shows", path: "/Movies&Shows" },
                { label: "Support", path: "/Support" },
                { label: "Subscriptions", path: "/Subscriptions" },
              ].map((item) => (
                <li
                  onClick={() => setIsActiveNavItem(item.path)}
                  key={item.label}
                >
                  <Link
                    className={`laptop:text-sm desktop:text-lg ${
                      item.path === isActiveNavItem
                        ? "laptop:font-medium laptop:text-absolute-white laptop:px-4 laptop:py-3 laptop:bg-black-10 laptop:rounded-lg desktop:py-3.5 desktop:px-6"
                        : "laptop:font-normal laptop:text-grey-75"
                    }`}
                    to="/"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <SearchBar type="laptop" />
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
      {createPortal(
        <div
          className={`
          fixed
          flex laptop:hidden
          w-screen h-screen py-20 px-10
          bg-black-10
          z-50 ${
            isOpen ? "translate-x-0" : "translate-x-[100vw]"
          } transition-transform duration-200
          `}
        >
          <div className="mx-auto">
            <SearchBar />
          </div>
          <button
            className="absolute top-7 right-7"
            onClick={() => setIsOpen(false)}
          >
            <img src={XWhite} alt="" width={24} height={24} />
          </button>
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Header;
