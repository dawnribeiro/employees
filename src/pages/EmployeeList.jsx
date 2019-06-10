import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function EmployeeList() {
  const [employeeList, setEmployeeList] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://sdg-staff-directory-app.herokuapp.com/api/dawnApps/Employees'
      )
      .then(resp => {
        console.log(resp.data)
        setEmployeeList(resp.data)
      })
  }, [])

  return (
    <section>
      <h2 className="employee-list">Employee List</h2>
      <Link to="/">Add New Employee</Link>
      <ul>
        {employeeList.map(employee => {
          return (
            <li key={employee.id}>
              <p>
                Name: {employee.firstName} {employee.lastName}
              </p>
              <p>Id: {employee.id}</p>
              <p>Job Title: {employee.jobTitle}</p>
              <Link to={`/EmployeePage/${employee.id}`}>
                <button>Profile</button>
              </Link>
              <button>Delete</button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
