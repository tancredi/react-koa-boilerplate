import View from './component/View'

/**
 * Routes module
 *
 * Defines and exports client's routes
 */

export default {

  component   : View,

  path        : '/',

  // Main view
  indexRoute  : {

    component : require('./view/Landing').default

  },

  childRoutes : [

    // 404 - Not found
    {
      path      : '*',
      component : require('./view/NotFound').default
    }

  ]

}