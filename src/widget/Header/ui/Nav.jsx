import { navArray } from "../const/navArray";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Nav({ type }) {
  const isActiveNavItem = useLocation().pathname

  if (type === "mobileMenu") {
    return (
      <nav
        className={`
        flex self-center justify-self-center laptop:hidden
        p-3 lg:p-6
        border-3 border-black-12 bg-black-06 rounded-[0.625rem] lg:rounded-xl
      `}
      >
        <ul className="flex flex-col items-center">
          {navArray.map((item) => (
            <li key={item.label}>
              <Link
                className={`
                block
                px-6.5 py-4 lg:px-10 lg:py-6
                text-base lg:text-2xl
                rounded-lg lg:rounded-2xl
                ${
                  isActiveNavItem === item.path
                    ? "text-absolute-white bg-black-10 "
                    : "text-grey-75 font-normal"
                }
              `}
                to={item.path}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav
      className={`
        hidden laptop:flex
        laptop:p-2 desktop:p-2.5
        laptop:border-3 laptop:border-black-12 laptop:bg-black-06 laptop:rounded-[0.625rem] desktop:rounded-xl
      `}
    >
      <ul className="laptop:flex">
        {navArray.map((item) => (
          <li key={item.label}>
            <Link
              className={`
                laptop:block
                laptop:px-5 laptop:py-3 desktop:py-3.5 desktop:px-6
                laptop:text-sm desktop:text-lg
                laptop:rounded-lg
                ${
                  isActiveNavItem === item.path
                    ? "laptop:text-absolute-white laptop:bg-black-10 laptop:font-medium"
                    : "laptop:text-grey-75 laptop:font-normal"
                }
              `}
              to={item.path}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
