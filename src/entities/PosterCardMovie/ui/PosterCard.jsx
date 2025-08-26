function PosterCardPopularMovie({ type = "", poster = "" }) {
  return (
    <div
      className={`${type}`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w300${poster})`,
      }}
    ></div>
  );
}

export default PosterCardPopularMovie;
