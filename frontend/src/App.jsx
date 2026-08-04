import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";

function App() {

  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);
const [isEditing, setIsEditing] = useState(false);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };
  const deleteEmployee = (id) => {
  setEmployees(employees.filter((employee) => employee.id !== id));
};

const updateEmployee = (updatedEmployee) => {
  setEmployees(
    employees.map((employee) =>
      employee.id === updatedEmployee.id
        ? updatedEmployee
        : employee
    )
  );

  setEditEmployee(null);
  setIsEditing(false);
};


  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Employee Management System
      </h1>

     
<EmployeeForm
  addEmployee={addEmployee}
  updateEmployee={updateEmployee}
  editEmployee={editEmployee}
  isEditing={isEditing}
/>
   <EmployeeTable
  employees={employees}
  deleteEmployee={deleteEmployee}
  setEditEmployee={setEditEmployee}
  setIsEditing={setIsEditing}
/>
    </div>
  );
}

export default App;