import * as React from "react";
import "./style.css";
import {
  Route, 
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Todo from './components/Todo';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HeLL0 WoRLd</h1>
      </header>
      <div className="menu">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/todo">TodoList</Link></li>
        </ul>
      </div>

      <div className="App-intro">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/todo" component={Todo}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}
