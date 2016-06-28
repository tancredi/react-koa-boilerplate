// Import Babel polyfills
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import AppHandler from './component/AppHandler'

/**
 * Client index module
 *
 * Initialises React application by rendering the AppHandler component on the
 * app's wrap element
 */

// Make React Object globally available on `window`
window.React = React

// Render AppHandler root component
ReactDOM.render(<AppHandler />, document.getElementById('app'))