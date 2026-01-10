import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPopularMovies } from "../features/movies/movieActions"
import { useNavigate } from "react-router-dom"
import Loader from "../components/Loader"

export default function MovieList() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { movies, loading, error } = useSelector(
    (state) => state.movies
  )

  useEffect(() => {
    dispatch(fetchPopularMovies())
  }, [dispatch])

  if (loading) return <Loader />
  if (error)
    return <h4 className="text-danger text-center">{error}</h4>

  return (
    <div className="container mt-4">
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>
            {/* 👇 CARD CLICKABLE */}
            <div
              className="card h-100 movie-card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h6>{movie.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
