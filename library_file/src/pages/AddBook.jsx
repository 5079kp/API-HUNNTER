import { useState } from "react"
import { addBook } from "../firebase"
import "./AddBook.css"

export default function AddBook() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await addBook({ title, author, createdAt: Date.now() })
      setTitle("")
      setAuthor("")
      alert("Book added successfully!")
    } catch (error) {
      console.error(error)
      alert("Failed to add book")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="addbook-page">
      <div className="addbook-card">
        <h2 className="addbook-title">Add New Book</h2>

        <form onSubmit={handleSubmit} className="addbook-form">
          <div className="form-group">
            <label>Book Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. The Great Gatsby"
              required
            />
          </div>

          <div className="form-group">
            <label>Author Name</label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="e.g. F. Scott Fitzgerald"
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add to Library"}
          </button>
        </form>
      </div>
    </div>
  )
}
