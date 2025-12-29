import { useEffect, useState } from "react";

export default function StudentForm({ addStudent, editStudent, updateStudent }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
    age: "",
  });

  // Edit button click → form fill
  useEffect(() => {
    if (editStudent) setStudent(editStudent);
  }, [editStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editStudent) {
      updateStudent(student); // PUT
    } else {
      addStudent(student); // POST
    }

    setStudent({
      name: "",
      email: "",
      course: "",
      phone: "",
      age: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-6 rounded-xl grid grid-cols-2 gap-4"
    >
      <input name="name" value={student.name} onChange={handleChange} placeholder="Name" className="p-2 rounded bg-slate-700" />
      <input name="email" value={student.email} onChange={handleChange} placeholder="Email" className="p-2 rounded bg-slate-700" />
      <input name="course" value={student.course} onChange={handleChange} placeholder="Course" className="p-2 rounded bg-slate-700" />
      <input name="phone" value={student.phone} onChange={handleChange} placeholder="Phone" className="p-2 rounded bg-slate-700" />
      <input name="age" value={student.age} onChange={handleChange} placeholder="Age" className="p-2 rounded bg-slate-700" />

      <button className="col-span-2 bg-indigo-600 py-2 rounded font-semibold">
        {editStudent ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}
