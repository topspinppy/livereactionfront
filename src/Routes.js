import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import { Show } from './Show';

const Routes = () => {
  return (
    <div>
      <Router basename="/">
          <Route exact path="/" component={App} />
          <Route exact path="/result" component={Show} />
      </Router>
    </div>
  )
}

export default Routes
