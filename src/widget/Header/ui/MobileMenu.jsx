import { createPortal } from "react-dom";
import XWhite from "@shared/assets/x-white.svg";
import Nav from "./Nav"
import SearchBar from "@features/SearchBar";

function MobileMenu({isOpen, setIsOpen}) {
  return createPortal(
    <div
      className={`
              fixed
              grid laptop:hidden
              w-screen h-screen py-20 px-10
              bg-black-10
              z-50 ${
                isOpen ? "translate-x-0" : "translate-x-[100vw]"
              } transition-transform duration-200
              `}
    >
        <Nav type="mobileMenu" />
      <button
        className="absolute top-7 right-7"
        onClick={() => setIsOpen(false)}
      >
        <img src={XWhite} alt="" width={24} height={24} />
      </button>
    </div>,
    document.getElementById("modal")
  );
}

export default MobileMenu;
