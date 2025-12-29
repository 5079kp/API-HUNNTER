import { useEffect, useRef } from "preact/hooks";
import { gsap } from "gsap";

export default function StudentCard({ student, onEdit, onDelete }) {
  const cardRef = useRef();

  useEffect(() => {
    gsap.from(cardRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.4,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-slate-800 p-4 rounded-xl shadow-lg"
    >
      <h3 className="text-xl font-bold">{student.name}</h3>
      <p>{student.email}</p>
      <p>{student.course}</p>
      <p>📞 {student.phone}</p>

      <div className="flex justify-between mt-3">
        <button
          onClick={() => onEdit(student)}
          className="text-indigo-400"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(student.id)}
          className="text-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
