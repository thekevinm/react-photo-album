import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Home from './Home'
import Albums from './Albums'
import Photo from './Photo'

class App extends Component {
  render() {
    return (
    <Router>
      <div>
    	
    	<div id="content">
    		<Route exact path="/" component={Home} />
    		<Route path="/albums/:id" component={Albums} />
        <Route path="/photo/:id" component={Photo} />
    	</div>

      </div>
    </Router>
    );
  }
}

export default App
