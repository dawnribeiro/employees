import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function EmployeePage(props) {
  console.log({ props })
  const [employeeProfile, setEmployeeProfile] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://sdg-staff-directory-app.herokuapp.com/api/dawnApps/Employees/${
          props.match.params.employeeId
        }
        `
      )
      .then(resp => {
        setEmployeeProfile(resp.data)
        console.log(resp.data)
        console.log('heres my data')
      })
  }, [])

  //   axios
  //   .get(
  //     'https://sdg-staff-directory-app.herokuapp.com/api/dawnApps/Employees/11'
  //   )
  //   .then(resp => {
  //     setEmployeeProfile(resp.data)
  //     console.log(resp.data)
  //     console.log('heres my data')
  //   })
  // }, [])

  return (
    <section>
      <h2 className="profile">Employee Profile</h2>
      <ul>
        <li key={employeeProfile.id}>
          <p>
            Name: {employeeProfile.firstName} {employeeProfile.lastName}
          </p>
          <p>Id: {employeeProfile.id}</p>
          <p>Job Title: {employeeProfile.jobTitle}</p>
        </li>
        )
      </ul>
      <Link to="/Employees">Back to Employee List</Link>
      <Link to="/">Add New Employee</Link>
    </section>
  )
}
