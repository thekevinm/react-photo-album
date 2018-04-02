import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Home from './Home'
import Albums from './Albums'
import Photo from './Photo'
import store from './store'

class App extends Component {
  render() {
    return (
    <Provider store={store}>
    <Router>
      <div>
    	
    	<div id="content">
    		<Route exact path="/" component={Home} />
    		<Route path="/albums/:id" component={Albums} />
        <Route path="/photo/:id" component={Photo} />
    	</div>

      </div>
    </Router>
    </Provider>
    );
  }
}

export default App
