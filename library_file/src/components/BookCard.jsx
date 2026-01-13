import "./BookCard.css"

export default function BookCard({ title, author, createdAt }) {
  return (
    <div className="book-card">
      
      {/* 📘 Book Cover */}
      <div className="book-cover">
        📚
      </div>

      {/* 📖 Book Info */}
      <h3 className="book-title">{title}</h3>

      <p className="book-author">
        by <span>{author}</span>
      </p>

      {/* 📅 Footer */}
      <div className="book-footer">
        <span className="book-date">
          {new Date(createdAt).toLocaleDateString()}
        </span>

        <button className="book-btn">
          View Details →
        </button>
      </div>

      {/* 🔥 Glow Border */}
      <div className="book-glow"></div>
    </div>
  )
}
