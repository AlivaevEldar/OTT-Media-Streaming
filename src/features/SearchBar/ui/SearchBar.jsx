import { useEffect, useRef, useState } from "react";
import search from "./search.svg";
import xWhite from "@shared/assets/x-white.svg";

function SearchBar({ type }) {
  const [isValue, setIsValue] = useState("");
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        console.log('клик вне компонента')
        setIsOpenSearch(false)
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  if (type === "laptop") {
    return (
      <>
        {isOpenSearch ? (
          <form
            ref={formRef}
            className="hidden laptop:grid laptop:justify-self-end laptop:grid-cols-[1fr_auto] laptop:gap-x-2 laptpot:items-center laptop:bg-black-15 laptop:p-2.5 laptop:rounded-lg"
          >
            <input
              className="placeholder:text-grey-60 outline-0 text-absolute-white"
              placeholder="Search..."
              value={isValue}
              onChange={(e) => setIsValue(() => e.target.value)}
            />
            <div className="flex gap-x-3 items-center">
              {isValue && (
                <img
                  src={xWhite}
                  alt=""
                  width={12}
                  height={12}
                  onClick={() => setIsValue("")}
                />
              )}
              <div className={`${isValue && "rounded-sm bg-black-25"} p-1.5 `}>
                <img
                  className="laptop:w-6 desktop:w-8.5"
                  src={search}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </form>
        ) : (
          <img
            onClick={() => setIsOpenSearch(true)}
            className="hidden laptop:inline-flex laptop:justify-self-end laptop:w-6 desktop:w-8.5"
            src={search}
            alt=""
            width={24}
            height={24}
          />
        )}
      </>
    );
  }

  return (
    <form
      className="grid grid-cols-[1fr_auto] gap-x-2 items-center bg-black-20 p-2.5 rounded-lg"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="placeholder:text-grey-60 outline-0 text-absolute-white"
        placeholder="Search..."
        value={isValue}
        onChange={(e) => setIsValue(() => e.target.value)}
      />
      <div className="flex gap-x-3 items-center">
        {isValue && (
          <img
            src={xWhite}
            alt=""
            width={12}
            height={12}
            onClick={() => setIsValue("")}
          />
        )}
        <div className={`${isValue && "rounded-sm bg-black-25"} p-1.5`}>
          <img src={search} alt="" width={24} height={24} />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
