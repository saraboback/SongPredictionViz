import React from 'react'
import Loader from 'react-loader-spinner'
import { normalColor } from '../constants'

export default props => (
  <Loader
    color={normalColor}
    type="TailSpin"
    width={200}
    height={150}
    {...props}
  />
)
