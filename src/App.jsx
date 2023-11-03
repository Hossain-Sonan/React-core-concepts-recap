import { useState } from 'react'

import './App.css'
import Posts from './posts'


function App() {
  

  return (
    <>
     
      <h3>React core concepts recap</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load data</li>
      </ol>

      <hr />
      <Posts></Posts>
      
    </>
  )
}

export default App
