import TMDbApi from "@shared/api/TMDbApiAxios";

async function getGenresMovie() {
  const requestGenres = await TMDbApi.get(`/genre/movie/list`);
  const requestMovieGenres = requestGenres.data.genres.map((genres) =>
    TMDbApi.get(`/discover/movie?with_genres=${genres.id}`)
  );
  const responseMovieGenres = await Promise.all(requestMovieGenres);

  const xz2 = [...Array(15)].map((_, index) => ({
    title: requestGenres.data.genres[index].name,
    posters: responseMovieGenres
      .map((movie) => movie.data.results)
      [index].slice(0, 4)
      .map((movie) => `https://image.tmdb.org/t/p/w300${movie.poster_path}`),
  }));

  return xz2;
}

export { getGenresMovie };
