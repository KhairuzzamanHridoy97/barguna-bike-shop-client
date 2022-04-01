import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Bikes from './Pages/Bikes/Bikes/Bikes';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Buy from './Pages/Buy/Buy';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Pages/DashBoard/DashBoard/DashBoard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute,';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/bikes'>
              <Bikes></Bikes>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/dashBoard'>
              <Dashboard></Dashboard>
            </Route>
            <PrivateRoute path='/buy/:bikeId'> 
              <Buy></Buy>
            </PrivateRoute>            
            <Route path="*">
              <NotFound></NotFound>
          </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
