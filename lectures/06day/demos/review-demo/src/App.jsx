import React from 'react'
import Header from './components/Header'
import Body from './components/Body'

const App = () => {
  return (
    <fieldset className='border border-3 border-primary p-3'>
      <legend className='p-1'>App.jsx </legend>
    <div>
      <Header/>
      <Body/>
    </div>
    </fieldset>
  )
}

export default App
