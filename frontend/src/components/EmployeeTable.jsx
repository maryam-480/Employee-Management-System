function EmployeeTable({
  employees,
  deleteEmployee,
  setEditEmployee,
  setIsEditing,
}) {
  return (
    <div className="card shadow mt-4">
      <div className="card-body">
        <h3>Employee List</h3>

        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <td>{index + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>

                <td>
               <button
  className="btn btn-warning btn-sm me-2"
  onClick={() => {
    setEditEmployee(employee);
    setIsEditing(true);
  }}
>
  Edit
</button>

                 <button
  className="btn btn-danger btn-sm"
  onClick={() => deleteEmployee(employee.id)}
>
  Delete
</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default EmployeeTable;