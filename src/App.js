import React, { Component } from 'react';
import './App.css';
import './Responsive.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPage from './components/main/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={MainPage} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
