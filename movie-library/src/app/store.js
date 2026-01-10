import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"   // ✅ CORRECT IMPORT
import movieReducer from "../features/movies/movieReducer"
import authReducer from "../features/auth/authSlice"

const rootReducer = combineReducers({
  movies: movieReducer,
  auth: authReducer,
})

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)
