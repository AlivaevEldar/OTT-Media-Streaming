import arrow from "@shared/assets/arrow-right.svg";
import { Link } from "react-router-dom";
import { SearchContext } from "@shared/context/SearchContext/SearchContext";
import { useContext } from "react";

function GenresCard({ title, posters = [] }) {
  const { searchTheme, setSearchTheme } = useContext(SearchContext);

  return (
    <Link
      className="
        shrink-0
        p-5 mr-4
      bg-black-10
        rounded-[0.625rem] border border-black-15
      "
      to="/openSearch&Genres"
      onClick={() => setSearchTheme({ title: title })}
    >
      <div
        className="
          relative
          grid grid-cols-[auto_auto] gap-1
        "
      >
        {posters.map((image, index) => (
          <img
            key={index}
            className="w-17 h-16.5 rounded-md object-cover"
            src={image}
            alt=""
            width={68}
            height={67}
          />
        ))}
        <div
          className="
            absolute top-0 
            w-full h-full 
            bg-[linear-gradient(to_top,theme(color.black.10)_0%,theme(color.black.10)_5%,theme(color.black.10)10_100%)]
          "
        ></div>
      </div>
      <div
        className="  
          flex justify-between items-center
          text-absolute-white text-sm font-semibold
        "
      >
        {title}
        <span>
          <img src={arrow} alt="" width={20} height={20} />
        </span>
      </div>
    </Link>
  );
}

export default GenresCard;
