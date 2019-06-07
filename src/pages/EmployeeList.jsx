import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
      <ul>
        {employeeList.map(employee => {
          return (
            <li key={employee.id}>
              <p>
                Name: {employee.firstName} {employee.lastName}
              </p>
              <p>Id: {employee.id}</p>
              <p>Job Title: {employee.jobTitle}</p>
              <button className="profile-button">Profile</button>
              <button>Delete</button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
