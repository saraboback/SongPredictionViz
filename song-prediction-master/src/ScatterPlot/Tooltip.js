import React from 'react'
import './tooltip.css'

export default ({ data }) => (
  <div className="tooltip">
    <p className="title">{data.metadata.title}</p>
    <p className="artist">{data.metadata.artist}</p>
  </div>
)