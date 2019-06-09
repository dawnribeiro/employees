import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EmployeesInput from './components/EmployeesInput'
import EmployeeList from './pages/EmployeeList'
import EmployeePage from './pages/EmployeePage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={EmployeesInput} />
          <Route exact path="/Employees" component={EmployeeList} />
          <Route exact path="/EmployeePage/" component={EmployeePage} />
          {/* <Route
            exact
            path={`/EmployeePage/${employee.id}`}
            component={EmployeePage}
          /> */}
        </Switch>
      </Router>
    )
  }
}

export default App
