import { SearchContext } from "@shared/context/SearchContext/SearchContext";
import { useContext } from "react";

function OpenSearchGenres() {
  const { searchTheme, setSearchTheme } = useContext(SearchContext);

  return (
    <>
      <section className="custom-container">
        <h1 className="text-absolute-white font-bold text-[1.75rem] laptop:text-5xl desktop:text-[3.625rem]">
          {searchTheme.title}
        </h1>
      </section>
    </>
  );
}

export default OpenSearchGenres;
