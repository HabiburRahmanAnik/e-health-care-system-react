
import './App.css';
import Register from './components/Register'
import Login from './components/Login'


//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>E-Healthcare System</h1>
      <BrowserRouter>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
