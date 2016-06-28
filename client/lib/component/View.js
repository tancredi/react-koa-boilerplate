import React from 'react'
import Header from './Header'

/**
 * View component
 *
 * Base view component
 */

export default class View extends React.Component {

  render() {
    return (
      <div className='app'>
        <Header />
        <div className='page'>{ this.props.children }</div>
      </div>
    )
  }


}

View.propTypes = {
  children : React.PropTypes.node
}