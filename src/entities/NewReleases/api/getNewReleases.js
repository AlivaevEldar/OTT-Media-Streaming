import TMDbApi from "@shared/api/TMDbApiAxios";

function getNewReleases() {
  const formated = (date) => date.toISOString().split("T")[0];

  const lastWeek = new Date(new Date().setDate(new Date().getDate() - 7));
  const now = new Date();

  const response = TMDbApi.get(
    `/discover/movie?&sort_by=primary_release_date.desc&primary_release_date.gte=${formated(
      lastWeek
    )}&primary_release_date.lte=${formated(now)}`
  );

  return response.then(response => response.data.results);
}

export { getNewReleases };
