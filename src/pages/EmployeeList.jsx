import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { setFlagsFromString } from 'v8';

export default function EmployeeList() {
  // const [employeeList, setEmployeeList]

  useEffect(() => {
    axios
      .get(
        'https://sdg-staff-directory-app.herokuapp.com/api/dawnApps/Employees'
      )
      .then(resp => {
        console.log(resp.data)
      })
    // .then(resp) =>{
    //   return
    // }
  }, [])
}

return(
  <section>
    <ul>
      {employeeList.map(employee =>
      return(
      <li key={employee.id }>
        <p>{employee.firstName}</p>
        <p>{employee.lastName}</p>
        <p>{employee.jobTitle}</p>
        <p>{employee.phoneNumber}</p>
        <p>{employee.email}</p>
      </li>
      )}
     
    </ul>
  </section>
)