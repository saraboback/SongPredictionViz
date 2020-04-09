import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { extent } from 'd3-array'
import Tooltip from './Tooltip'
import {
  ScatterPlot,
  ScatterSeries,
  ScatterPoint,
  LinearXAxis,
  LinearYAxis,
  LinearXAxisTickSeries,
  LinearXAxisTickLabel,
  LinearYAxisTickSeries,
  LinearYAxisTickLabel,
  ChartTooltip,
  ChartZoomPan,
} from 'reaviz'
//imports various charts from reaviz library
export default ({
  data = [],
  axisXValue,
  axisYValue,
  isPointHighlighted,
  color,
  highlightedColor,
}) => {
  const height = 400
  const width = 700
  const size = 4

  const [axisXProps, setAxisXProps] = useState({ type: 'value' })
  const [axisYProps, setAxisYProps] = useState({ type: 'value' })

  useEffect(
    () => () => {
      const value = _.get(data, [0, 'metadata', axisXValue], null)
      const type = _.isNumber(value) ? 'value' : 'category'
      let domain
      if (type === 'value') {
        domain = extent(data, entry => entry.metadata[axisXValue])
      }
      const tickSeries = _.isNumber(value) ? (
        undefined
      ) : (
        <LinearXAxisTickSeries
          label={<LinearXAxisTickLabel rotation={true} />}
        />
      )

      setAxisXProps({
        type,
        tickSeries,
        domain,
      })
    },
    [data, axisXValue],
  )

  useEffect(
    () => () => {
      const value = _.get(data, [0, 'metadata', axisYValue], null)
      const type = _.isNumber(value) ? 'value' : 'category'
      let domain
      if (type === 'value') {
        domain = extent(data, entry => entry.metadata[axisYValue])
      }
      const tickSeries = _.isNumber(value) ? (
        undefined
      ) : (
        <LinearYAxisTickSeries
          label={<LinearYAxisTickLabel rotation={false} />}
        />
      )

      setAxisYProps({
        type,
        tickSeries,
        domain,
      })
    },
    [data, axisYValue],
  )

  return (
    <>
      <ScatterPlot
        height={height}
        width={width}
        xAxis={<LinearXAxis {...axisXProps} />}
        yAxis={<LinearYAxis {...axisYProps} />}
        data={data}
        zoomPan={<ChartZoomPan />}
        series={
          <ScatterSeries
            animated={false}
            point={
              <ScatterPoint
                color={d =>
                  isPointHighlighted(d.metadata) ? highlightedColor : color
                }
                size={d => (isPointHighlighted(d.metadata) ? size * 1.3 : size)}
                tooltip={<ChartTooltip content={d => <Tooltip data={d} />} />}
              />
            }
          />
        }
      />
    </>
  )
}
