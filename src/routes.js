import React from 'react'
import {Switch, Route} from 'react-router-dom'
import GlobalFeed from './modules/pages/globalFeed'
import Articles from './modules/pages/articles'
import Authentication from './modules/pages/authentication'

const Routes = () => {
  return (
  <Switch>
      <Route path = '/'  exact component = {GlobalFeed} />
      <Route path = '/articles/:slug' component = {Articles} />
      <Route path = '/login' component = {Authentication} />
    </Switch>
  )}

export default Routes
