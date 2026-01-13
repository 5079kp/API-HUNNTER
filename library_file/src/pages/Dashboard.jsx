import { useEffect, useState } from "react"
import Hero3D from "../three/Hero3D"
import { db } from "../firebase"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import BookCard from "../components/BookCard"
import Loader from "../components/Loader"
import "./Dashboard.css"

export default function Dashboard() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const q = query(collection(db, "books"), orderBy("createdAt", "desc"))
        const querySnapshot = await getDocs(q)
        const booksData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setBooks(booksData)
      } catch (error) {
        console.error("Error fetching books:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [])

  if (loading) return <Loader />

  return (
    <div className="dashboard-page">

      {/* HERO SECTION */}
      <div className="dashboard-hero">
        <div className="hero-overlay">
          <h1>Discover Your Next Read</h1>
          <p>Explore the future of digital libraries</p>
        </div>
        <Hero3D />
      </div>

      {/* STATS */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Books</h3>
          <p className="stat-blue">{books.length}</p>
        </div>
        <div className="stat-card">
          <h3>Active Readers</h3>
          <p className="stat-green">1,023</p>
        </div>
        <div className="stat-card">
          <h3>System Status</h3>
          <p className="stat-purple">Online</p>
        </div>
      </div>

      {/* BOOK LIST */}
      <h2 className="section-title">Recent Collections</h2>

      {books.length === 0 ? (
        <div className="empty-state">
          No books found. Start by adding one!
        </div>
      ) : (
        <div className="books-grid">
          {books.map(book => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      )}

    </div>
  )
}
