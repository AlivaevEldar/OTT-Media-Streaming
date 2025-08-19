import search from "./search.svg";

function SearchBar() {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 py-1 pr-1 pl-3 bg-black-06 rounded-full border border-black-12">
      <img src={search} alt="" width={24} height={24} />
      <input className="placeholder:text-absolute-white text-absolute-white focus:outline-none" type="text" placeholder="Введите свой запрос..." />
      <button className="rounded-r-full rounded-l-lg py-2 p-3 bg-black-08 text-absolute-white">Search</button>
    </div>
  );
}

export default SearchBar;
