import TMDbApi from "@shared/api/TMDbApiAxios";

export const getPopularMovieList = async () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  try {
    const request = pages.map((page) =>
      TMDbApi.get(`/movie/popular?language=en-US&page=${page}`)
    );

    const response = await Promise.all(request);

    const allMovies = response.flatMap((item) => item.data.results);

    return allMovies;
  } catch (error) {
    console.log(error)
    return []
  }
};
