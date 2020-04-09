import React, { useState, useEffect, useCallback } from 'react'
import { color } from 'd3-color'
import ScatterPlot from '../ScatterPlot'
import { normalColor, highlightedColor } from '../constants'

import './FirstVisualisation.css'

function FirstVisualisation({
  data = [],
  allOptions = [],
  isPointHighlighted = () => false,
  initialOpacity = 0.75,
  initialAxisXValue = 'genre_dortmund',
  initialAxisYValue = 'danceability',
}) {
  const [opacity, setOpacity] = useState(initialOpacity)
  const [mappedData, setMapData] = useState([])
  const [axisXValue, setAxisXValue] = useState(initialAxisXValue)
  const [axisYValue, setAxisYValue] = useState(initialAxisYValue)

  // this function that gets cached for each "opacity" change
  // that returns a rgba color from the input with the applied opacity
  const getColor = useCallback(
    c => {
      const newColor = color(c)
      newColor.opacity = opacity

      return newColor.toString()
    },
    [opacity],
  )

  useEffect(() => {
    setMapData(
      data.map(entry => ({
        key: entry[axisXValue],
        data: entry[axisYValue],
        metadata: {
          ...entry,
        },
      })),
    )
  }, [data, axisXValue, axisYValue])

  return (
    <div className="FirstVisualisation">
      <div>
        <label>y axis:</label>
        <select
          value={axisYValue}
          onChange={e => setAxisYValue(e.target.value)}
        >
          {allOptions.map(o => (
            <option value={o} key={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>x axis:</label>
        <select
          value={axisXValue}
          onChange={e => setAxisXValue(e.target.value)}
        >
          {allOptions.map(o => (
            <option value={o} key={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>dots opacity ({Math.round(100 * opacity)}%):</label>
        <input
          value={opacity}
          type="range"
          min="0"
          max="1"
          step="0.05"
          onChange={e => setOpacity(e.target.value)}
        />
      </div>
      <ScatterPlot
        data={mappedData}
        allOptions={allOptions}
        axisYValue={axisYValue}
        axisXValue={axisXValue}
        isPointHighlighted={isPointHighlighted}
        color={getColor(normalColor)}
        highlightedColor={getColor(highlightedColor)}
      />
    </div>
  )
}

export default FirstVisualisation
