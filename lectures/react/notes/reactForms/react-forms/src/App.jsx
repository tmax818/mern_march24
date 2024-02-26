
import './App.css'

import React from 'react'
import ControlledInput from './components/ControlledInput'
import UncontrolledInput from './components/UncontrolledInput'
import UserForm from './components/UserForm'

const App = () => {
  return (
    <div>
      <h2>Controlled</h2>
      <ControlledInput />
      <h2>Uncontrolled</h2>
      <UncontrolledInput/>

      <h2>User Form</h2>
      <UserForm />
    </div>
  )
}

export default App

