import { useDispatch, useSelector } from "react-redux"
import { searchMovies } from "../features/movies/movieActions"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"

export default function MovieSearch() {
  const dispatch = useDispatch()
  const { movies, loading, error } = useSelector(
    (state) => state.movies
  )

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search movies..."
        onChange={(e) => dispatch(searchMovies(e.target.value))}
      />

      {loading && <Loader />}
      {error && (
        <h5 className="text-danger text-center">
          {error}
        </h5>
      )}

      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <div className="card h-100 movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h6>{movie.title}</h6>
                <Link
                  to={`/movie/${movie.id}`}
                  className="btn btn-sm btn-dark mt-2"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
