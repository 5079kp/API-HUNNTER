import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import MovieList from "./pages/MovieList"
import MovieSearch from "./pages/MovieSearch"
import MovieDetails from "./pages/MovieDetails"
import Login from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/search" element={<MovieSearch />} />
        <Route
          path="/movie/:id"
          element={
            <PrivateRoute>
              <MovieDetails />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
