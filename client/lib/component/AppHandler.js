import React from 'react'
import { Router, browserHistory } from 'react-router'
import routes from '../routes'

/**
 * AppHandler component
 *
 * Root component that renders router with routes from the `/routes` module
 */

export default class AppHandler extends React.Component {

  render() {
    return (<Router history={ browserHistory } routes={ routes } />)
  }

}