// import axios from "axios";

export const fetchMovies = async (str) => {
  const response = await fetch(
    "https://www.omdbapi.com/?apikey=1c49254a&t=avatar",
  );
  const movies = await response.json();
  return movies;

  // const { data } = await axios.get(
  //   "https://www.omdbapi.com/?apikey=1c49254a&t=" + str
  // );
  //
  // return data;
};
