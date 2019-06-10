import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EmployeesInput from './components/EmployeesInput'
import EmployeeList from './pages/EmployeeList'
import EmployeePage from './pages/EmployeePage'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={EmployeesInput} />
            <Route exact path="/Employees" component={EmployeeList} />
            {/* <Route exact path="/EmployeePage/" component={EmployeePage} /> */}
            <Route
              exact
              path="/EmployeePage/:employeeId"
              component={EmployeePage}
            />
          </Switch>
        </Router>
      </section>
    )
  }
}

export default App
