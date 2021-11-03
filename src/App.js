import Home from './Components/Pages/Home'
import Login from './Components/Pages/Login'
import GenerateCharts from './Components/Pages/GenerateCharts'
import Historic from './Components/Pages/Historic'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route path="/Login">
            <Login />
            </Route>
            <Route path="/Historico">
            <Historic />
            </Route>
        </Switch>
    </Router>
  );
}

