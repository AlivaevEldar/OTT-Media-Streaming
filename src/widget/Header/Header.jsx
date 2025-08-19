import IconWrapper from "@shared/ui/kit/IconWrapper";
import logo from "./logo.svg";
import xWhite from "./x-white.svg";
import { useState } from "react";
import { createPortal } from "react-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    document.documentElement.classList.add("is-lock");
  }

  return (
    <header className="sticky custom-container pt-10 pb-3.5 laptop:py-4.5">
      {createPortal(
        <div
          className={`z-50 absolute transition-transform transition-200 ${
            isOpen ? "translate-0" : "-translate-x-full"
          }`}
        >
          <div className="relative bg-black-06 w-screen h-screen">
            <div className="">
              <ul>
                <li>
                  
                </li>
              </ul>
            </div>
            <button
              className="absolute top-7 right-7 lg:top-10 lg:right-10"
              onClick={() => setIsOpen(false)}
            >
              <img className="w-6 lg:w-9" src={xWhite} alt="" width={24} height={24} />
            </button>
          </div>
        </div>,
        document.getElementById("modal")
      )}
      <div className="grid grid-cols-[auto_auto] justify-between items-center">
        <a href="">
          <img className="w-29" src={logo} alt="" width={116} height={35} />
        </a>
        <IconWrapper type="burger" onClick={() => setIsOpen(true)}>
          <div className="w-6 h-6 px-0.5 py-1.5 grid gap-y-1 justify-items-end">
            <span className="w-full border rounded-full border-absolute-white"></span>
            <span className="w-full border rounded-full border-absolute-white"></span>
            <span className="w-1/2 border rounded-full border-absolute-white"></span>
          </div>
        </IconWrapper>
      </div>
    </header>
  );
}

export default Header;
