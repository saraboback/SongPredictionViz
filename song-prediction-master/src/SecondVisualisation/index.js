import React, { useState, useEffect } from 'react'

import _ from 'lodash'
import { fetchData } from '../util/fetchData'
import { PieChart } from 'reaviz'
import FirstVisualisationComponent from '../FirstVisualisation/FirstVisualisation'
import Spinner from '../Spinner'

import './SecondVisualisation.css'

function SecondVisualisation() {
  const [data, setData] = useState({})
  const [hitData, setHitData] = useState([])
  const [predictedData, setPredictedData] = useState([])
  const [successRate, setSuccessRate] = useState(0)

  const [scatterplotData, setScatterplotData] = useState([])
  const [allOptions, setAllOptions] = useState([])

  useEffect(() => {
    Promise.all([
      fetchData('../data/song-prediction.json'),
      fetchData('../data/latest-second-dataset.json'),
    ]).then(([allData, predictions]) => {
      const result = {}
      predictions.forEach(prediction => {
        const { id } = prediction

        result[id] = {
          ...prediction,
          ..._.find(allData, { id }),
        }
      })

      // console.log('result', result)
      setData(result)
    })
  }, [])

  useEffect(() => {
    const hit = { key: 'Hit', data: 0 }
    const nonHit = { key: 'Not hit', data: 0 }
    const values = Object.values(data)
    const hasData = values.length > 0

    values.forEach(({ isHit }) => {
      if (isHit) {
        hit.data += 1
      } else {
        nonHit.data += 1
      }
    })

    console.log('hitData', [hit, nonHit])
    console.log('data', data)
    setHitData(hasData ? [hit, nonHit] : [])
  }, [data])

  useEffect(() => {
    const predicted = { key: 'Succesfully predicted', data: 0 }
    const notPredicted = { key: 'Failed to predict', data: 0 }
    const values = Object.values(data)
    const hasData = values.length > 0

    values.forEach(({ isHit, prediction }) => {
      if (isHit === prediction) {
        predicted.data += 1
      } else {
        notPredicted.data += 1
      }
    })

    setPredictedData(hasData ? [predicted, notPredicted] : [])
  }, [data])

  useEffect(() => {
    const successRate =
      predictedData.length === 0
        ? 0
        : Math.round(
            (100 * predictedData[0].data) /
              (predictedData[0].data + predictedData[1].data),
          )
    setSuccessRate(successRate)
  }, [predictedData])

  useEffect(() => {
    const t = setTimeout(() => {
      const allOptions = Object.keys(
        _.get(Object.values(data), '0', []),
      ).filter(k => !!k)

      setAllOptions(allOptions)
      setScatterplotData(
        Object.values(data)
          .map(({ id }) => data[id])
          .filter(el => !!el),
      )
    }, 1000)

    return () => clearTimeout(t)
  }, [data])

  return (
    <div className="SecondVisualisation">
      <div>
        <h3>Real Hit data</h3>
        {hitData.length > 0 ? (
          <PieChart width={400} height={200} data={hitData} />
        ) : (
          <Spinner />
        )}
      </div>
      <div>
        <h3>Prediction success rate ({successRate}%)</h3>
        {predictedData.length > 0 ? (
          <PieChart width={400} height={200} data={predictedData} />
        ) : (
          <Spinner />
        )}
      </div>

      <div>
        <h3>Red = prediction was right</h3>
        {scatterplotData.length > 0 ? (
          <FirstVisualisationComponent
            data={scatterplotData}
            allOptions={allOptions}
            isPointHighlighted={data => data.prediction === true}
            initialOpacity={1 / 3}
            initialAxisXValue="chords_key"
            initialAxisYValue="year"
          />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  )
}

export default SecondVisualisation
