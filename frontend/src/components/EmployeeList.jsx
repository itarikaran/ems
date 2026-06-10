import { useEffect, useState } from "react";
import { getEmployees } from "../services/EmployeeService";

function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8">
                Employee Management System
            </h1>

            <table className="w-full border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-3">ID</th>
                        <th className="border p-3">Name</th>
                        <th className="border p-3">Department</th>
                        <th className="border p-3">Email</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td className="border p-3">{emp.id}</td>
                            <td className="border p-3">{emp.name}</td>
                            <td className="border p-3">{emp.department}</td>
                            <td className="border p-3">{emp.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;