import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';


class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>

          <Route
          exact={true}
          path='/'
          component={Home}
          />

        </PageWrapper>
      </Router>
    );
  }
}

export default App;
