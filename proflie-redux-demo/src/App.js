import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ProfileContainer from './app/container/profile.container';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
				<div>
					<Switch>
						<Route path="/" component={ProfileContainer}
						 />
					</Switch>
				</div>
			</BrowserRouter>
    );
  }
}

export default App;
