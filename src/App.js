import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Startup from './components/Startup'
import Login from './components/Login'



function App() {
  return (
    <Router>
    <React.Fragment>
     
       <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/startup" component={Startup} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      </Switch>
   
      
    </React.Fragment>
    </Router>
  );
}

export default App;
