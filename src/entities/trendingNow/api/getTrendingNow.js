import TMDbApi from "@shared/api/TMDbApiAxios";

async function getTrendingNow() {
  const responseTrending = await TMDbApi.get("/trending/movie/day");
  const requestDetails = responseTrending.data.results.map((movieTrend) =>
    TMDbApi.get(`/movie/${movieTrend.id}`)
  );

  const responseDetails = await Promise.all(requestDetails);

  return responseDetails.map((obj) => obj.data);
}

export { getTrendingNow };
