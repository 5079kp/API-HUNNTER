import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchMovieDetails } from "../features/movies/movieActions"
import Loader from "../components/Loader"

export default function MovieDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { movieDetails, loading, error } = useSelector(
    (state) => state.movies
  )

  useEffect(() => {
    dispatch(fetchMovieDetails(id))
  }, [dispatch, id])

  // ✅ Loading State
  if (loading || !movieDetails) return <Loader />

  // ✅ Error State
  if (error)
    return (
      <h4 className="text-danger text-center mt-5">
        {error}
      </h4>
    )

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            className="img-fluid rounded"
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        </div>

        <div className="col-md-8">
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>

          <p>
            <strong>Release:</strong>{" "}
            {movieDetails.release_date}
          </p>

          <p>
            <strong>Rating:</strong> ⭐{" "}
            {movieDetails.vote_average}
          </p>

          {/* ⭐ FAVORITE BUTTON */}
          <button
            className="btn btn-warning mt-3"
            onClick={() =>
              dispatch({
                type: "ADD_FAVORITE",
                payload: movieDetails,
              })
            }
          >
            ⭐ Add to Favorites
          </button>
        </div>
      </div>
    </div>
  )
}
