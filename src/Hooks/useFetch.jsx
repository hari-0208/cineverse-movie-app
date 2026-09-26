import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm) => {
  // Card Data Gathering from useState

  const [data, setData] = useState([]);

  //  API Key import

  const key = import.meta.env.VITE_API_KEY;

  // URL Create

  const url = queryTerm
    ? `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${encodeURIComponent(queryTerm)}`
    : `https://api.themoviedb.org/3/${apiPath}?api_key=${key}`;

  // UseEffect

  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => setData(jsonData.results));
    }

    fetchMovies();
  }, [url]);

  return { data };
};
