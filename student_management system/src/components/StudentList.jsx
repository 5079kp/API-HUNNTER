export default function StudentList({ students, onEdit, onDelete }) {
  return (
    <div className="mt-10 overflow-x-auto">
      <table className="w-full border-collapse bg-slate-800 rounded-xl overflow-hidden">
        <thead className="bg-slate-700">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Course</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Age</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 && (
            <tr>
              <td colSpan="6" className="p-4 text-center text-gray-400">
                No students found
              </td>
            </tr>
          )}

          {students.map((s) => (
            <tr key={s.id} className="border-t border-slate-700">
              <td className="p-3">{s.name}</td>
              <td className="p-3">{s.email}</td>
              <td className="p-3">{s.course}</td>
              <td className="p-3">{s.phone}</td>
              <td className="p-3">{s.age}</td>

              <td className="p-3 flex gap-2 justify-center">
                <button
                  onClick={() => onEdit(s)}
                  className="px-3 py-1 bg-yellow-500 rounded text-black"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(s.id)}
                  className="px-3 py-1 bg-red-600 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
