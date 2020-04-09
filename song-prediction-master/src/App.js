import React from 'react'
import './App.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import FirstVisualisation from './FirstVisualisation'
import SecondVisualisation from './SecondVisualisation'

function App() {
  return (
    <div className="App">
      <FirstVisualisation />
      <SecondVisualisation />
    </div>
  )
}

export default App
