const initialState = {
  movies: [],
  movieDetails: null,
  loading: false,
  error: null,
}

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case "MOVIES_LOADING":
      return { ...state, loading: true, error: null }

    case "MOVIES_SUCCESS":
      return { ...state, loading: false, movies: action.payload }

    case "MOVIES_ERROR":
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
