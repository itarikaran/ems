import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        EMS Test
      </h1>

      {employees.map((emp) => (
        <div
          key={emp.id}
          className="border p-4 mb-3 rounded"
        >
          <p>Name: {emp.name}</p>
          <p>Department: {emp.department}</p>
          <p>Email: {emp.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;