import Wrapper from "./Wrapper";

function Details({ release, genres }) {
  function formatReleaseDate(dateStr) {
    if (!dateStr) return ""; // на случай пустой даты
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
    }).format(date);
  }

  return (
    <Wrapper className="grid gap-y-5">
      <div className="">
        <h1 className="p">Released Year</h1>
        <span className="p block mt-2.5 !text-absolute-white">
          {formatReleaseDate(release)}
        </span>
      </div>
      <div className="">
        <h1 className="p">Gernes</h1>
        <div className="flex flex-wrap gap-2.5 mt-2.5">
          {genres?.map((gerne) => (
            <span className="py-1.5 px-3 font-medium text-sm text-absolute-white bg-black-08 border border-black-15 rounded-md">
              {gerne.name}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Details;
