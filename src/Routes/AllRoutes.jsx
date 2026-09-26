import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MovieDetails, MovieList, PageNotFound, Search } from "../Pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <MovieList
            title="Your Guide to Great Movies"
            apiPath="movie/now_playing"
          />
        ),
      },

      {
        path: "movies/popular",
        element: <MovieList title="Popular Movies" apiPath="movie/popular" />,
      },

      {
        path: "movies/top",
        element: (
          <MovieList title="Top Rated Movies" apiPath="movie/top_rated" />
        ),
      },

      {
        path: "movies/upcoming",
        element: <MovieList title="Upcoming Movies" apiPath="movie/upcoming" />,
      },

      {
        path: "movie/:id",
        element: <MovieDetails />,
      },

      {
        path: "search",
        element: <Search apiPath="search/movie" />,
      },

      {
        path: "*",
        element: <PageNotFound title="Page not found" />,
      },
    ],
  },
]);
