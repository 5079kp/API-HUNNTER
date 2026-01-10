import { api } from "../../api/tmdb"

/* ===============================
   FETCH POPULAR MOVIES
================================ */
export const fetchPopularMovies = () => async (dispatch) => {
  try {
    dispatch({ type: "MOVIES_LOADING" })

    const res = await api.get("/movie/popular")

    dispatch({
      type: "MOVIES_SUCCESS",
      payload: res.data.results,
    })
  } catch  {
    dispatch({
      type: "MOVIES_ERROR",
      payload: "Failed to load popular movies",
    })
  }
}

/* ===============================
   SEARCH MOVIES
================================ */
export const searchMovies = (query) => async (dispatch) => {
  // 🔹 empty input handle
  if (!query || query.trim() === "") {
    dispatch({
      type: "MOVIES_SUCCESS",
      payload: [],
    })
    return
  }

  try {
    dispatch({ type: "MOVIES_LOADING" })

    const res = await api.get("/search/movie", {
      params: { query },
    })

    dispatch({
      type: "MOVIES_SUCCESS",
      payload: res.data.results,
    })
  } catch  {
    dispatch({
      type: "MOVIES_ERROR",
      payload: "Search failed",
    })
  }
}

/* ===============================
   FETCH MOVIE DETAILS
================================ */
export const fetchMovieDetails = (id) => async (dispatch) => {
  if (!id) return

  try {
    dispatch({ type: "MOVIE_DETAILS_LOADING" })

    const res = await api.get(`/movie/${id}`)

    dispatch({
      type: "MOVIE_DETAILS_SUCCESS",
      payload: res.data,
    })
  } catch  {
    dispatch({
      type: "MOVIES_ERROR",
      payload: "Failed to load movie details",
    })
  }
}
