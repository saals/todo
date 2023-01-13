import React from 'react'
import { withRouter } from 'react-router-dom'

const ShowLocationInfo = ({ match, location, history }) =>
  <div>You are now at "{location.pathname}"</div>

const ShowLocationWithRouter = withRouter(ShowLocationInfo)

export default ShowLocationWithRouter
