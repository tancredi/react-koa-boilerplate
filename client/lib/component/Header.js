import React from 'react'
import { Link } from 'react-router'

/**
 * AppHandler component
 *
 * Root component that renders router with routes from the `/routes` module
 */

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <div className='inner'>

          <Link to='/' className='logo'></Link>

          <ul className='nav'>

            <li><Link to='/foo'>Foo</Link></li>

          </ul>

        </div>
      </header>
    )
  }

}