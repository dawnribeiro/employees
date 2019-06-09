import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function EmployeesInput() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')

  const addEmployee = event => {
    event.preventDefault()
    axios
      .post(
        'https://sdg-staff-directory-app.herokuapp.com/api/dawnApps/Employees',
        {
          firstName: firstName,
          lastName: lastName,
          jobTitle: jobTitle,
          phoneNumber: phoneNumber,
          email: email
        }
      )
      .then(resp => {
        console.log(resp.data)
      })
  }

  return (
    <>
      <section className="form-container">
        <form onSubmit={addEmployee}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={event => setJobTitle(event.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={event => setPhoneNumber(event.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <button className="add-btn">Add Employee</button>
        </form>
      </section>
      <Link to="/Employees">See List of Employees</Link>
    </>
  )
}
