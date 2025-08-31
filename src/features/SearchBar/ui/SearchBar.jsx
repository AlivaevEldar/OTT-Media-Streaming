import { useState } from "react";
import search from "./search.svg";

function SearchBar({ type }) {
  const [value, setValue] = useState("");
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false)

  if (type === "mobileMenu") {
    return (
      <div
        className="
          grid self-start justify-self-center grid-cols-[1fr_auto] items-center
          py-1 pr-2 lg:py-3 lg:pr-5
          bg-black-08 
          border border-black-15 rounded-md lg:rounded-2xl
        "
      >
        <input
          className="
                p-4 lg:p-5
              text-absolute-white font-normal placeholder:text-grey-60 placeholder:font-normal lg:text-2xl
              bg-black-08
                outline-0 focus:outline-2 focus:outline-grey-60
              "
          type="text"
          placeholder="Search..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className={`${
            value && "inline-flex bg-black-20 w-10 h-10 rounded-md"
          } p-2`}
        >
          <img className="w-6 h-6" src={search} alt="" width={24} height={24} />
        </button>
      </div>
    );
  }
  return (
    <div
      className="
        hidden laptop:grid grid-cols-[1fr_auto] justify-self-end items-center
        pr-2
        bg-black-08
        border border-black-15 rounded-md
      "
    >
      <input
        className="
            p-4
          text-absolute-white font-normal placeholder:text-grey-60 placeholder:font-normal
          bg-black-08
          outline-0 focus:outline-2 focus:outline-grey-60
          
         "
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className={`${
          value && "inline-flex bg-black-20 w-10 h-10 rounded-md"
        } p-2`}
      >
        <img className="w-6 h-6" src={search} alt="" width={24} height={24} />
      </button>
    </div>
  );
}

export default SearchBar;
