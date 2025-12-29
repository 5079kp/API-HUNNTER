import { useEffect, useState } from "react";
import studentApi from "./api/studentApi";
import StudentForm from "./components/Studentform";
import StudentList from "./components/StudentList";

export default function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const fetchStudents = async () => {
    const res = await studentApi.get("/students");
    setStudents(res.data);
    console.log(students);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async (data) => {
  await studentApi.post("/students", data);
  fetchStudents(); 
};


  const updateStudent = async (data) => {
  await studentApi.put(`/students/${data.id}`, data);
  setEditStudent(null);
  fetchStudents();
};
const deleteStudent = async (id) => {
  await studentApi.delete(`/students/${id}`);
  fetchStudents();
};

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-6">
        🎓 Student Management System
      </h1>

      <StudentForm
        addStudent={addStudent}
        editStudent={editStudent}
        updateStudent={updateStudent}
      />

      <StudentList
        students={students}
        onEdit={setEditStudent}
        onDelete={deleteStudent}
      />
    </div>
  );
}
