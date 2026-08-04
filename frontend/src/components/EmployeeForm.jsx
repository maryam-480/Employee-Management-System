import { useState, useEffect } from "react";

function EmployeeForm({
  addEmployee,
  updateEmployee,
  editEmployee,
  isEditing,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  useEffect(() => {
  if (editEmployee) {
    setName(editEmployee.name);
    setEmail(editEmployee.email);
    setDepartment(editEmployee.department);
    setSalary(editEmployee.salary);
  }
}, [editEmployee]);


  const handleSubmit = (e) => {
    e.preventDefault();

  const employee = {
  id: isEditing ? editEmployee.id : Date.now(),
  name,
  email,
  department,
  salary,
};

if (isEditing) {
  updateEmployee(employee);
} else {
  addEmployee(employee);
}
   

    setName("");
    setEmail("");
    setDepartment("");
    setSalary("");
  };
  

  return (
    <div className="card shadow p-4">
      <h3>Add Employee</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>

      <button type="submit" className="btn btn-primary w-100">
  {isEditing ? "Update Employee" : "Add Employee"}
</button>
      </form>
    </div>
  );
}

export default EmployeeForm;