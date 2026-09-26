import { useSearchParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { useEffect } from "react";
import { Card } from "../Components";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();

  const queryTerms = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerms);

  useEffect(() => {
    document.title = `Search result for ${queryTerms}`;
  }, [queryTerms]);

  return (
    <main className="container">
      <h5 className="search-title">
        {movies.length === 0
          ? `No result found ${queryTerms}`
          : `Result for ${queryTerms}`}
      </h5>

      <div className="search-movies">
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </main>
  );
};
