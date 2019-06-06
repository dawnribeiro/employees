import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function EmployeeList() {
  useEffect(() => {
    axios
      .get(
        'https://sdg-staff-directory-app.herokuapp.com/api/dawnApps/Employees'
      )
      .then(resp => {
        console.log('employee')
      })
  }, [])
}
