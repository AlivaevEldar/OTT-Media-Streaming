function NewReleases({ poster = "", releases = "" }) {
  return (
    <article className="py-3 px-1.5 mr-5 bg-black-10 rounded-[0.625rem] border border-black-15">
      <div className="flex">
        <img
          className="w-38.5 h-48 rounded-[0.625rem] object-cover shrink-0"
          src={poster}
          alt=""
          width={154}
          height={193}
        />
      </div>
      <div className="mt-3 px-3.5 py-1.5 text-xs font-medium bg-black-08 rounded-full border border-black-15 break-all [hyphens:auto]">
        <span className="text-grey-60">Released at </span>
        <span className="text-grey-75">{releases}</span>
      </div>
    </article>
  );
}

export default NewReleases;
