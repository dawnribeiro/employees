import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function EmployeePage() {
  const [employeeProfile, setEmployeeProfile] = useState([])
  useEffect(() => {
    axios
      .get(
        'https://sdg-staff-directory-app.herokuapp.com/api/{dawnApps}/Employees/{id}'
      )
      .then(resp => {
        console.log(resp.data)
        setEmployeeProfile(resp.data)
      })
  })
  return <>maybe</>
}
