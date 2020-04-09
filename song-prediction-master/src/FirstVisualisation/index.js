import React, { useState, useEffect } from 'react'

import { fetchData } from '../util/fetchData'
import FirstVisualisationComponent from './FirstVisualisation'
import Spinner from '../Spinner'

function FirstVisualisation() {
  const [data, setData] = useState([])
  const [allOptions, setAllOptions] = useState([])

  useEffect(() => {
    fetchData('../data/small-dataset.json').then(data => {
      console.log('#########', data)
      const allOptions = Object.keys(data[0]).filter(k => !!k)
      setData(data)
      setAllOptions(allOptions)
    })
  }, [])

  return (
    <div className="FirstVisualisation">
      <h3>Red = song is a hit</h3>
      {data.length > 0 ? (
        <FirstVisualisationComponent
          data={data}
          allOptions={allOptions}
          isPointHighlighted={data => data.hit === 'true'}
        />
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default FirstVisualisation
